<?php

namespace App\Helpers\Core;

use App\Helpers\Classes\Vcard\VcardProperty\Properties\LocationVcard;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Illuminate\Validation\Validator;
use App\Helpers\Core\Constants;
use Stevebauman\Location\Facades\Location;

class Utils
{
    static function actionValidityHasExpired($dateFrom, $expirationMinutes = 2880) # 48h (2 Jours)
    {
        // Convertit la date de création en timestamp
        $createAsTimestamp = strtotime($dateFrom);

        // Calcule le timestamp actuel
        $currentTimestamp = time();

        // Calcule le temps d'expiration en secondes
        $expirationSeconds = $expirationMinutes * 60;

        // Calcule la différence de temps entre la date de création et maintenant
        $timeDifference = $currentTimestamp - $createAsTimestamp;

        // Vérifie si le temps écoulé dépasse le temps d'expiration
        if ($timeDifference > $expirationSeconds) {
            return true; // Le temps d'expiration est dépassé
        } else {
            return false; // L'action est encore valide
        }
    }

    static function esser(string $text, int $length): string
    {
        return $length > 1 ? $text . 's' : $text;
    }

    static function generateReferralCode($userId, $length = 6)
    {
        // Caractères possibles dans le code de référencement
        $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        $mdSize = 4;

        // Mélanger les caractères de façon aléatoire
        $randomString = '';
        for ($i = 0; $i < ($length - $mdSize); $i++) {
            $randomString .= $characters[rand(0, strlen($characters) - 1)];
        }

        // Inclure une partie de l'ID utilisateur pour l'unicité
        $userPart = substr(md5($userId), 0, $mdSize); // Génère un hash à partir de l'ID de l'utilisateur

        // Retourner le code de référencement unique
        return strtoupper($randomString . $userPart);
    }

    static function json_res(bool $state, string $msg = "",  $data = [], int $status = null): array

    {
        return ["state" => $state, "msg" => $msg, "data" => $data, "status" => $status];
    }

    static function json_res_error(Validator $validator)
    {
        return Utils::json_res(false, "Validator Inputs Error",   $validator->errors(), Constants::UNPROCESSABLE_ENTITY_STATUS_CODE);
    }

    static function timeSinceNow(Carbon $targetDate)
    {
        $now = Carbon::now();
        return $targetDate->diffForHumans($now, CarbonInterface::DIFF_RELATIVE_TO_NOW, false, 1, 0 | Carbon::NO_ZERO_DIFF | Carbon::JUST_NOW | Carbon::ONE_DAY_WORDS);
    }

    function growthPercentageFromDataCount(int $beforeValue, int $afterValue)
    {
        $diff = $afterValue - $beforeValue;
        $percentage = $beforeValue != 0 ? ($diff / $beforeValue) * 100 : 0;
        return $percentage;
    }
    static public function getUserLocation(string  $ip, bool $encode = true): LocationVcard|string
    {
        $position = Location::get($ip);
        $loc = null;

        if ($position) {
            $loc = new LocationVcard(
                ip : $position->ip,
                iso_code : $position->countryCode,
                country :  $position->countryName,
                city :  $position->cityName,
                state : $position->regionCode,
                state_name : $position->regionName,
                postal_code : $position->postalCode,
                lat : $position->latitude,
                lon : $position->longitude,
                timezone : $position->timezone,
                continent : null,
                currency : null,
                deFault : null
            );
        }else{
            $loc = new LocationVcard(
                ip : $ip,
                iso_code : "CA",
                country :  "CANADA",
                city :  "GATINEAU",
                state : "QA",
                state_name : "Quebec",
                postal_code : "J8X1H2",
                lat : 4.23930,
                lon : 4.59009,
                timezone : null,
                continent : null,
                currency : null,
                deFault : null
            );
        }

        if ($encode == true) {
            return json_encode($loc);
        } else {
            return $loc;
        }
    }
}
