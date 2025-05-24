<?php

use App\Models\User;
use JeroenDesloovere\VCard\VCard;
use Illuminate\Support\Facades\Storage;

function vcardGenerate(User $user, string $rootPath = "vcards")
{
    $vinfo = (array) json_decode($user->vinfo, true);
    // dd($vinfo);
    // define vcard
    $vcard = new VCard();

    // add personal vinfo
    $vcard->addName(ucfirst($vinfo["names"]["familyName"]), ucfirst($vinfo["names"]["givenName"]), ucfirst($vinfo["names"]["middleName"]), ucfirst($vinfo["names"]["prefix"]), ucfirst($vinfo["names"]["suffix"]));

    $vcard->addNote(ucfirst($vinfo["note"]["text"]));
    $vcard->addEmail($vinfo["email"]['text'], ucfirst($vinfo["email"]['type']));
    $vcard->addPhoneNumber($vinfo["phone"]['text'], ucfirst($vinfo["phone"]['type']));
    // foreach ($vinfo['works'] as $work) {
    //     $vcard->addCompany($work['organization']);
    //     $vcard->addJobTitle($work['title']);
    //     $vcard->addRole($work['role']);
    // }

    // foreach ($vinfo['phones'] as $phone) {
    //     $vcard->setProperty( #Line 967
    //         'phoneNumber',
    //         'TEL' . (($phone['type'] != '') ? ';' . 'type=' . ucfirst($phone['type']) : ';' . 'type=' . ucfirst('phone')),
    //         $phone['text']
    //     );
    //     // $vcard->addPhoneNumber($phone['text'], ucfirst($phone['type']));
    // }

    // foreach ($vinfo['emails'] as $email) {
    //     $vcard->setProperty(
    //         'email',
    //         'EMAIL;INTERNET' . (($email['type'] != '') ? ';' . 'type=' . ucfirst('email') : ''),
    //         $email['text']
    //     );
    //     // $vcard->addEmail($email['text'], ucfirst($email['type']));
    // }


    // foreach ($vinfo['addresses'] as $address) {
    //     $vcard->addAddress('', '', $address['street'], $address['locality'], $address['region'], $address['code'], $address['country'], $address['type']);
    // }

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
        // $vcard->addURL($url['uri'], $url['type']);
    }

    // Ajout de l'URL de la photo
    if (!empty($user->profile_photo_path)) {
        $vcard->addPhoto(storage_path('app' . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR . $user->profile_photo_path));
    }
    # Vcard Dir Start
    $vcard_dir = $rootPath;

    $destPath = storage_path('app' . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR) . $vcard_dir . DIRECTORY_SEPARATOR;


    if (Storage::disk('public')->exists($vcard_dir) === false) {
        Storage::disk('public')->makeDirectory($vcard_dir);
    }
    // save vcard on disk
    $vcard->setSavePath($destPath);
    $vcard->setFilename($user->uuid);
    $vcard->save();

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
    $vcard->addEmail($vinfo["email"]['text'], ucfirst($vinfo["email"]['type']));
    $vcard->addPhoneNumber($vinfo["phone"]['text'], ucfirst($vinfo["phone"]['type']));
    // foreach ($vinfo['works'] as $work) {
    //     $vcard->addCompany($work['organization']);
    //     $vcard->addJobTitle($work['title']);
    //     $vcard->addRole($work['role']);
    // }

    // foreach ($vinfo['phones'] as $phone) {
    //     $vcard->setProperty( #Line 967
    //         'phoneNumber',
    //         'TEL' . (($phone['type'] != '') ? ';' . 'type=' . ucfirst($phone['type']) : ';' . 'type=' . ucfirst('phone')),
    //         $phone['text']
    //     );
    //     // $vcard->addPhoneNumber($phone['text'], ucfirst($phone['type']));
    // }

    // foreach ($vinfo['emails'] as $email) {
    //     $vcard->setProperty(
    //         'email',
    //         'EMAIL;INTERNET' . (($email['type'] != '') ? ';' . 'type=' . ucfirst('email') : ''),
    //         $email['text']
    //     );
    //     // $vcard->addEmail($email['text'], ucfirst($email['type']));
    // }


    // foreach ($vinfo['addresses'] as $address) {
    //     $vcard->addAddress('', '', $address['street'], $address['locality'], $address['region'], $address['code'], $address['country'], $address['type']);
    // }

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
        // $vcard->addURL($url['uri'], $url['type']);
    }

    // Ajout de l'URL de la photo
    if (!empty($user->profile_photo_path)) {
        if (file_exists($user->profile_photo_path)) {
            $vcard->addPhoto(storage_path('app' . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR . $user->profile_photo_path));
        }
    }


    return $vcard;
}
