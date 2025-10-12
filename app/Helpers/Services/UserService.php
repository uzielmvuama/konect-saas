<?php

namespace App\Helpers\Services;

use App\Helpers\Classes\Kpoint;
use App\Helpers\Classes\Vcard\UserVcard;
use App\Helpers\Classes\Vcard\VcardConfig\VcardConfig;
use App\Helpers\Classes\Vcard\VcardProperty\Properties\LocationVcard;
use App\Helpers\Core\Constants;
use App\Helpers\Core\Utils;
use App\Helpers\Enums\PointActions;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Inertia\Inertia;
use JeroenDesloovere\VCard\VCard;
use function App\Helpers\Functions\normalize_url;

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

        $ip = request()->ip();
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
            'name'         => $payload['name'],
            'firstname'    => $payload['firstname'],
            'email'        => $payload['email'],
            'uuid'         => Str::uuid()->toString(),
            'password'     => Hash::make($payload['password']),
            'vconfig'      => $vcardConfig->json_gen(),
            'vinfo'        => $vcard->json_gen(),
            'referal_from' => $payload['referal_from'] ?? null,
        ]);

        $userExist = User::where('email', $payload["email"]);
        if (!$userExist->exists()) {
            $user->save();
            $user->referal_code = Utils::generateReferralCode($user->id);
            $user->save();

            if (!empty($payload['referal_from'])) {
                $userRef = User::where('referal_code', $payload['referal_from'])->first();
                $userRef?->update_kpoints(PointActions::REGISTRATION);
            }
        } else {
            $user = $userExist->first();
        }

        return Utils::json_res(true, "User created successfully", $user, Constants::CREATED_STATUS_CODE);
    }

    public function updateBasicUserInfo(User $user, array $payload)
    {
        $user->update([
            'email'     => $payload['email']     ?? $user->email,
            'name'      => $payload['lastname']  ?? $user->name,
            'firstname' => $payload['firstname'] ?? $user->firstname,
        ]);

        return Utils::json_res(true, "User informations updated successfully", $user, Constants::CREATED_STATUS_CODE);
    }

    public function updatePassword(string $old, string $new)
    {
        $user = request()->user();
        if (!Hash::check($old, $user->password)) {
            return Utils::json_res(false, "The old password doesn't match with your current password", [], Constants::BAD_REQUEST_STATUS_CODE);
        }

        if ($new === $old) {
            return Utils::json_res(false, "Please, enter a different password since the last", [], Constants::BAD_REQUEST_STATUS_CODE);
        }

        $user->password = Hash::make($new);
        $user->save();

        return Utils::json_res(true, "Password successfully updated", [], Constants::CREATED_STATUS_CODE);
    }

    /**
     * Uploade l’avatar dans la collection Spatie 'profile'.
     * Le modèle User doit avoir ->addMediaCollection('profile')->singleFile() + conversion 'thumb'.
     */
    public function updateProfilImage(User $user, UploadedFile $img)
    {
        // Ajout direct via Spatie (singleFile => remplace l’existant)
        $media = $user->addMedia($img)->toMediaCollection('profile');

        // Optionnel: régénérer (si besoin) ou laisser la queue gérer les conversions
        // Artisan: medialibrary:regenerate

        // (Déprécie l’ancien stockage à la main: plus de profile_photo_path)
        // Si tu veux garder la compat : $user->profile_photo_path = $media->getPath(); $user->save();

        // (Re)générer la vCard en prenant la miniature comme photo
        $this->vcardGenerate($user);

        return Utils::json_res(true, "Profile image successfully updated", [
            'media_id' => $media->id,
            'thumb'    => $user->getFirstMediaUrl('profile', 'thumb') ?: $user->getFirstMediaUrl('profile'),
        ], Constants::CREATED_STATUS_CODE);
    }

    /**
     * Uploade la cover dans la collection Spatie 'cover'.
     */
    public function updateBackgroundImage(User $user, UploadedFile $img)
    {
        // Ajout direct via Spatie
        $media = $user->addMedia($img)->toMediaCollection('cover');

        // Si tu as une conversion 'large' sur 'cover', tu peux renvoyer son URL
        return Utils::json_res(true, "Background image successfully updated", [
            'media_id' => $media->id,
            'url'      => $media->getUrl(), // ou conversion si définie
        ], Constants::CREATED_STATUS_CODE);
    }

    /**
     * Compose la vCard (en utilisant l’URL de la miniature de la collection 'profile')
     * puis l’enregistre dans la collection Spatie 'vcards' (singleFile).
     */
    public function vcardGenerate(User $user): bool
    {
        $vinfo = (array) json_decode($user->vinfo ?? '[]', true);

        $vcard = new VCard();

        // --- Nom/prénom & note
        $names = $vinfo["names"] ?? [];
        $vcard->addName(
            ucfirst($names["familyName"] ?? ''),
            ucfirst($names["givenName"] ?? ''),
            ucfirst($names["middleName"] ?? ''),
            ucfirst($names["prefix"] ?? ''),
            ucfirst($names["suffix"] ?? '')
        );

        if (!empty($vinfo['note']['text'])) {
            $vcard->addNote(ucfirst($vinfo['note']['text']));
        }

        // --- Emails
        foreach (($vinfo['emails'] ?? []) as $email) {
            if (!empty($email['text'])) {
                $vcard->addEmail($email['text'], ucfirst($email['type'] ?? ''));
            }
        }

        // --- Téléphones
        foreach (($vinfo['phones'] ?? []) as $phone) {
            if (!empty($phone['text'])) {
                $vcard->addPhoneNumber($phone['text'], ucfirst($phone['type'] ?? 'work'));
            }
        }

        // --- Réseaux sociaux (URL-* custom)
        foreach (($vinfo['socialProfils'] ?? []) as $social => $link) {
            $uri  = $link['uri']  ?? '';
            $type = $social ?: '';
            if (!empty($uri)) {
                $vcard->setProperty('url-' . $type, 'URL' . ($type !== '' ? ';type=' . ucfirst($type) : ''), $uri);
            }
        }

        // --- URLs (website etc.)
        $shared = ["website","siteweb","site web","my website","mon siteweb"];
        foreach (($vinfo['urls'] ?? []) as $url) {
            $uri  = $url['uri']  ?? '';
            $type = strtolower($url['type'] ?? '');
            if (!empty($uri) && in_array($type, $shared, true)) {
                $vcard->setProperty('url-' . $type, 'URL' . ($type !== '' ? ';type=' . ucfirst($type) : ''), $uri);
            }
        }

        // --- Photo: URL de la miniature de 'profile'
        $photoUrl = $this->getVcardPhotoUrlFromSpatie($user);

        if ($photoUrl) {
            $clean_url= \normalize_url(SFTP_ROOT_PATH. DIRECTORY_SEPARATOR. $photoUrl);
            // La lib supporte une URL (HTTP/HTTPS) ou un path
            $vcard->addPhoto($clean_url);
        }

        // --- Sauvegarde en collection 'vcards' (Spatie)
        $filename = $user->uuid . '.vcf';
        $content  = (string) $vcard->getOutput();
        // singleFile() sur la collection 'vcards' => remplace l’ancienne
        $user->addMediaFromString($content)
            ->usingFileName($filename)
            ->toMediaCollection('vcards');

        return true;
    }

    /**
     * Récupère la meilleure URL à utiliser pour la photo de vCard :
     * - d’abord la conversion 'thumb' de 'profile'
     * - sinon l’originale de 'profile'
     * - sinon null
     * Si ton disk est privé (S3), préfère getTemporaryUrl().
     */
    protected function getVcardPhotoUrlFromSpatie(User $user): ?string
    {
        // Public disk :
        $thumb = $user->getFirstMediaUrl(PROFILE_IMG_ROOT_PATH, 'thumb');
        if (!empty($thumb)) return $thumb;

        $orig = $user->getFirstMediaUrl(PROFILE_IMG_ROOT_PATH);
        if (!empty($orig)) return $orig;

        // S3 privé (exemple) :
        // $m = $user->getFirstMedia('profile');
        // if ($m) return $m->getTemporaryUrl(now()->addMinutes(10), 'thumb') ?? $m->getTemporaryUrl(now()->addMinutes(10));

        return null;
    }

    /**
     * Version “compose” qui retourne l’objet VCard prêt (utile si tu veux le streamer)
     * Utilise aussi la miniature Spatie.
     */
    public function vcardCompose(User $user): VCard
    {
        $vinfo = (array) json_decode($user->vinfo ?? '[]', true);
        $vcard = new VCard();

        $names = $vinfo["names"] ?? [];
        $vcard->addName(
            ucfirst($names["familyName"] ?? ''),
            ucfirst($names["givenName"] ?? ''),
            ucfirst($names["middleName"] ?? ''),
            ucfirst($names["prefix"] ?? ''),
            ucfirst($names["suffix"] ?? '')
        );

        if (!empty($vinfo['note']['text'])) {
            $vcard->addNote(ucfirst($vinfo['note']['text']));
        }

        foreach (($vinfo['emails'] ?? []) as $email) {
            if (!empty($email['text'])) {
                $vcard->addEmail($email['text'], ucfirst($email['type'] ?? ''));
            }
        }

        foreach (($vinfo['phones'] ?? []) as $phone) {
            if (!empty($phone['text'])) {
                $vcard->addPhoneNumber($phone['text'], ucfirst($phone['type'] ?? 'work'));
            }
        }

        foreach (($vinfo['socialProfils'] ?? []) as $social => $link) {
            $uri  = $link['uri']  ?? '';
            $type = $social ?: '';
            if (!empty($uri)) {
                $vcard->setProperty('url-' . $type, 'URL' . ($type !== '' ? ';type=' . ucfirst($type) : ''), $uri);
            }
        }

        $shared = ["website","siteweb","site web","my website","mon siteweb"];
        foreach (($vinfo['urls'] ?? []) as $url) {
            $uri  = $url['uri']  ?? '';
            $type = strtolower($url['type'] ?? '');
            if (!empty($uri) && in_array($type, $shared, true)) {
                $vcard->setProperty('url-' . $type, 'URL' . ($type !== '' ? ';type=' . ucfirst($type) : ''), $uri);
            }
        }

        if ($photoUrl = $this->getVcardPhotoUrlFromSpatie($user)) {
            $clean_url= \normalize_url(SFTP_ROOT_PATH. DIRECTORY_SEPARATOR. $photoUrl);
            // La lib supporte une URL (HTTP/HTTPS) ou un path
            $vcard->addPhoto($clean_url);
        }

        return $vcard;
    }

    public function markNotificationsAsRead(User $user)
    {
        $notifications = $user->unreadNotifications;
        if ($notifications->count() > 0) {
            foreach ($notifications as $notification) {
                $notification->markAsRead();
            }
            return Utils::json_res(false, "Notifications marked as read", [], Constants::NO_CONTENT_STATUS_CODE);
        }
    }

    public function vcardFormatSetUpstream(User $user)
    {

    }
}
