<?php

namespace App\Helpers\Services;

use App\Events\ContactFeedEvent;
use App\Events\KonectFeedbackDoneEvent;
use App\Helpers\Core\Constants;
use App\Helpers\Core\Utils;
use App\Helpers\Enums\PointActions;
use App\Models\ContactFeed;
use App\Models\Konect;
use App\Models\KonectCategory;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class KonectService
{
    public function makeConnection(array $payload)
    {
        $user = User::where('uuid', $payload['uuid']);
        if ($user->exists()) {
            $user_first = $user->first();
            $user_id = $user->first()->id;

            $way = (int) $payload["way"];

            $phone_clicked = $way == 1 ? true : false;
            $social_clicked = $way == 2 ? true : false;

            $ip = $payload["ip"];

            if (Storage::disk(FILE_DRIVER)->exists(VCARD_ROOT_PATH . "/$user_first->uuid.vcf") === false) {
                $service =  new UserService();
                $service->vcardGenerate($user_first);
            }

            if (!Konect::where('ko_ip_konect', $ip)->where('user_id', $user_id)->exists()) {
                $konect = new Konect();
                $konect->ko_ip_konect = $ip;
                $konect->ko_ip_locations = Utils::getUserLocation(ip: $ip);
                $konect->ko_social_clicked = $social_clicked;
                $konect->ko_phone_clicked = $phone_clicked;
                $konect->user_id = $user_id;

                # Ajout des points
                $user_first->update_kpoints(PointActions::CONNECTING);

                // Envoi d'email
                // $user =  $user->first();
                // $user->notify(new KonectSuccessNotification(konect: Konect::where('ko_ip_konect', $ip)->where('user_id', $user_id)->first()));


                // $user->notify(new KonectSuccessNotification());

                $konect->save();

                return Utils::json_res(true, "Konect successfully created", $konect, Constants::CREATED_STATUS_CODE);
            } else {
                return Utils::json_res(false, "Konect already exists", [], Response::HTTP_OK);
            }
        } else {
            // user not found
        }
    }

    public function createCategory(array $payload)
    {
        $user = User::where('uuid', $payload['uuid']);
        if ($user->exists()) {
            $user_id = $user->first()->id;

            if (!KonectCategory::where('kc_label', $payload["kc_label"])->exists()) {
                $category = new KonectCategory();
                $category->user_id = $user_id;
                $category->kc_label = $payload["kc_label"];
                $category->save();

                // Envoi d'email
                // $user =  $user->first();
                // $user->notify(new KonectSuccessNotification(konect: Konect::where('ko_ip_konect', $ip)->where('user_id', $user_id)->first()));


                // $user->notify(new KonectSuccessNotification());


                return Utils::json_res(true, "Konect category successfully created", $category, Constants::CREATED_STATUS_CODE);
            } else {

                return Utils::json_res(false, "Konect  category already exists", [], Constants::UNAUTHORIZED_STATUS_CODE);
            }
        } else {
            return Utils::json_res(false, "User doesn't exist", [], Constants::UNAUTHORIZED_STATUS_CODE);
        }
    }

    public function feedbackResponse(string $name, string $firstname, string $email, string $phone, ?string $comment,
                                     User
    $user)
    {
        // On vérifie si l’entrée existe déjà
        $alreadyExists = ContactFeed::where('user_id', $user->id)
            ->whereJsonContains('feed_info->email', $email)
            ->exists();

        if ($alreadyExists) {
            return Utils::json_res(
                false,
                __("This contact was already shared."),
                false,
                Response::HTTP_CONFLICT // 409
            );
        }

        // Création du feed
        $cf = new ContactFeed();
        $cf->feed_info = [
            "name" => $name,
            "firstname" => $firstname,
            "email" => $email,
            "phone" => $phone,
            "comment" => $comment ?? "",
        ];
        $cf->user_id = $user->id;
        $cf->save();

        // Event
        ContactFeedEvent::dispatch($cf);

        return Utils::json_res(
            true,
            __("Konect feed successfully done"),
            true,
            Response::HTTP_CREATED
        );
    }

}
