<?php

namespace App\Helpers\Services;

use App\Helpers\Classes\Kpoint;
use App\Helpers\Classes\Vcard\UserVcard;
use App\Helpers\Classes\Vcard\VcardConfig\VcardConfig;
use App\Helpers\Classes\Vcard\VcardProperty\Properties\LocationVcard;
use App\Models\User;
use App\Helpers\Core\Utils;
use App\Helpers\Core\Constants;
use App\Helpers\Enums\PointActions;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;
use JeroenDesloovere\VCard\VCard;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class UserService
{
    public function getAllUsers(int $paginate = 10)
    {
        $users = User::paginate($paginate);
        return Utils::json_res(true, "User successfully fetched", $users, Constants::FETCH_STATUS_CODE);
    }
    public function createUser(array $payload)
    {
        $vcardConfig = new VcardConfig();
        $vcard = new UserVcard();
        $ip = \request()->ip();
        $location = Utils::getUserLocation(ip: $ip, encode: false);

        $vcard->location = new LocationVcard(
            ip: $ip,
            iso_code: $location->iso_code,
            country: $location->country,
            city: $location->city,
            state: $location->state,
            state_name: $location->state_name,
            postal_code: $location->postal_code,
            lat: $location->lat,
            lon: $location->lon,
            timezone: $location->timezone,
            continent: $location->continent,
            currency: $location->currency,
            deFault: $location->deFault,
        );


        $user = new User();
        $user->fill([
            'name' => $payload['name'],
            'firstname' => $payload['firstname'],
            'email' => $payload['email'],
            'uuid' => Str::uuid()->toString(),
            'password' => Hash::make($payload['password']),
            'vconfig' => $vcardConfig->json_gen(),
            'vinfo' => $vcard->json_gen(),
            'referal_from' => $payload['referal_from']
        ]);

        $userExist = User::where('email', $payload["email"]);
        # If user never exists
        if (!$userExist->exists()) {
            $user->save();
            $user->referal_code = Utils::generateReferralCode($user->id);
            $user->save();

            # Ajout des points
            if (!empty($payload['referal_from'])) {
                $userRef = User::where('referal_code', $payload['referal_from'])->first();
                $userRef->update_kpoints(PointActions::REGISTRATION);
            }
        } else {
            $user = $userExist->first();
        }
        return Utils::json_res(true, "User created successfully", $user, Constants::CREATED_STATUS_CODE);
    }

    public function updateBasicUserInfo(User $user, array $payload)
    {
        ## Update Process
        $user->update([
            'email' => $payload['email'] ?? $user->email,
            'name' => $payload['lastname'] ?? $user->name,
            'firstname' => $payload['firstname'] ?? $user->firstname
        ]);

        return Utils::json_res(true, "User informations updated successfully", $user, Constants::CREATED_STATUS_CODE);
    }

    public function updatePassword(string $old, string $new)
    {
        ### Update password informations
        $user = \request()->user();
        if (Hash::check($old, $user->password)) {
            if ($new != $old) {
                ## Update Process
                $user->password = empty($new) ? $user->password : Hash::make($new);
                $user->save();
                return Utils::json_res(true, "Password successfully updated", [], Constants::CREATED_STATUS_CODE);
            } else {

                return Utils::json_res(false,  "Please, enter a different password since the last", [], Constants::BAD_REQUEST_STATUS_CODE);
            }
        } else {
            return Utils::json_res(false,  "The old password doesn't match with your current password", [], Constants::BAD_REQUEST_STATUS_CODE);
        }
    }

    public function updateProfilImage(User $user, UploadedFile $img, string $rootPath = "profile-photos")
    {
        $image = Image::make($img->path())->fit(1000);
        $imgFilename = $user->uuid . ".jpg";

        if (!Storage::disk(FILE_DRIVER)->exists($rootPath)) {
            Storage::disk(FILE_DRIVER)->makeDirectory($rootPath);
        }

        if (Storage::disk(FILE_DRIVER)->put($rootPath . DIRECTORY_SEPARATOR . $imgFilename, (string)$image->encode('jpg', 100))) {
            $user->profile_photo_path = $rootPath . DIRECTORY_SEPARATOR . $imgFilename;
            $user->save();

            $this->compressImage($user);
            $this->vcardGenerate($user);
            return Utils::json_res(true, "Profile image successfully updated", $user, Constants::CREATED_STATUS_CODE);
        } else {
            return Utils::json_res(false, "Problem during upload process", [], Constants::BAD_REQUEST_STATUS_CODE);
        }
    }


    function vcardGenerate(User $user, string $rootPath = "vcards")
    {
        $vinfo = (array) json_decode($user->vinfo, true);
        // define vcard
        $vcard = new VCard();

        // add personal vinfo
        $vcard->addName(ucfirst($vinfo["names"]["familyName"]), ucfirst($vinfo["names"]["givenName"]), ucfirst($vinfo["names"]["middleName"]), ucfirst($vinfo["names"]["prefix"]), ucfirst($vinfo["names"]["suffix"]));

        $vcard->addNote(ucfirst($vinfo["note"]["text"]));

        foreach ($vinfo['email'] as $email) {
            $vcard->addEmail($email['text'] ?? '', ucfirst($email['type'] ?? ''));
        }


        foreach ($vinfo['socialProfils'] as $social => $link) {
            if (!empty($link['uri'])) {
                $vcard->setProperty(
                    'url-' . $social,
                    'URL' . (($social != '') ? ';' . 'type=' . ucfirst($social) : ''),
                    $link['uri']
                );
            }

            // $vcard->addURL($social['uri'], $social['type']);
        }
        $sharedlink = ["website", "siteweb", "site web", "my website", "mon siteweb",];
        foreach ($vinfo['phone'] as $phone) {
            $vcard->addPhoneNumber($phone['text'] ?? "", ucfirst($phone['type'] ?? "work"));
        }

        foreach ($vinfo['urls'] as $url) {
            if (!empty($url['uri'])) {
                if (in_array(strtolower($url['type']), $sharedlink)) {
                    $vcard->setProperty(
                        'url-' . $url['type'],
                        'URL' . (($url['type'] != '') ? ';' . 'type=' . ucfirst($url['type']) : ''),
                        $url['uri']
                    );
                }
            }
            // $vcard->addURL($url['uri'], $url['type']);
        }

        // Ajout de l'URL de la photo
        if (!empty($user->profile_photo_path) && Storage::disk(FILE_DRIVER)->exists($user->profile_photo_path)) {
            $path = Storage::disk(FILE_DRIVER)->path($user->profile_photo_path);
            $vcard->addPhoto((FILE_DRIVER == 'sftp' ? FILES_APP_URL . DIRECTORY_SEPARATOR : "") . $path);
        }


        # Vcard Dir Start

        $vcard_dir = DIRECTORY_SEPARATOR . $rootPath;

        $destPath =  $vcard_dir . DIRECTORY_SEPARATOR;

        if (!Storage::disk(FILE_DRIVER)->exists($vcard_dir)) {
            Storage::disk(FILE_DRIVER)->makeDirectory($vcard_dir);
        }

        // save vcard on disk
        Storage::disk(FILE_DRIVER)->put($destPath . $user->uuid . '.vcf', (string) $vcard->getOutput());

        return true;
    }


    function vcardCompose(User $user): Vcard
    {
        $vinfo = (array) json_decode($user->vinfo, true);
        // dd($vinfo);
        // define vcard
        $vcard = new VCard();

        // add personal vinfo
        $vcard->addName(ucfirst($vinfo["names"]["familyName"]), ucfirst($vinfo["names"]["givenName"]), ucfirst($vinfo["names"]["middleName"]), ucfirst($vinfo["names"]["prefix"]), ucfirst($vinfo["names"]["suffix"]));

        $vcard->addNote(ucfirst($vinfo["note"]["text"]));
        foreach ($vinfo['email'] as $email) {
            $vcard->addEmail($email['text'], ucfirst($email['type']));
        }

        foreach ($vinfo['phone'] as $phone) {
            $vcard->addPhoneNumber($phone['text'] ?? "", ucfirst($phone['type'] ?? "work"));
        }


        foreach ($vinfo['socialProfils'] as $social => $link) {
            if (!empty($link['uri'])) {
                $vcard->setProperty(
                    'url-' . $social,
                    'URL' . (($social != '') ? ';' . 'type=' . ucfirst($social) : ''),
                    $link['uri']
                );
            }

            // $vcard->addURL($social['uri'], $social['type']);
        }
        $sharedlink = ["website", "siteweb", "site web", "my website", "mon siteweb",];
        foreach ($vinfo['urls'] as $url) {
            if (!empty($url['uri'])) {
                if (in_array(strtolower($url['type']), $sharedlink)) {
                    $vcard->setProperty(
                        'url-' . $url['type'],
                        'URL' . (($url['type'] != '') ? ';' . 'type=' . ucfirst($url['type']) : ''),
                        $url['uri']
                    );
                }
            }
        }

        if (!empty($user->profile_photo_path) && Storage::disk(FILE_DRIVER)->exists($user->profile_photo_path)) {
            $path = Storage::disk(FILE_DRIVER)->path($user->profile_photo_path);
            $vcard->addPhoto((FILE_DRIVER == 'sftp' ? FILES_APP_URL . DIRECTORY_SEPARATOR : "") . $path);
        }

        return $vcard;
    }

    function compressImage(User $user, string $rootPath = COMP_PROFILE_IMG_ROOT_PATH)
    {
        if ($user->exists()) {

            // $this->vcardGenerate($user);
            $imgPath = Storage::disk(FILE_DRIVER)->get($user->profile_photo_path);
            $basename = pathinfo($user->profile_photo_path, PATHINFO_BASENAME);
            $destPath = DIRECTORY_SEPARATOR . $rootPath . DIRECTORY_SEPARATOR . $basename;
            # Compress Dir Start
            $compress_dir = $rootPath;

            if (Storage::disk(FILE_DRIVER)->exists($compress_dir) === false) {
                Storage::disk(FILE_DRIVER)->makeDirectory($compress_dir);
            }
            # Compress Dir End
            # Compress Dir End
            $image = Image::make($imgPath);
            $image->fit(250, 250);
            // $image->save($destPath);
            Storage::disk(FILE_DRIVER)->put($destPath, (string) $image->encode());

            return response()->json(Utils::json_res(state: true, status: 201, msg: "compressed image created", data: []));
        } else {
            return response()->json(Utils::json_res(state: false, status: 201, msg: "user not found", data: []), status: 400);
        }
    }

    function markNotificationsAsRead(User $user)
    {
        $notifications = $user->unreadNotifications;
        if ($notifications->count() > 0) {
            foreach ($notifications as $notification) {
                $notification->markAsRead();
            }
            return Utils::json_res(false,  "Notifications marked as read", [], Constants::NO_CONTENT_STATUS_CODE);
        }
    }
}
