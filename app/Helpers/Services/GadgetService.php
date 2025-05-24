<?php

namespace App\Helpers\Services;

use App\Helpers\Classes\Gadget\GadgetCustomDetails;
use App\Helpers\Core\Constants;
use App\Helpers\Core\Utils;
use App\Models\KoGadget;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class GadgetService
{
    public function makeGadget(int $kitemId, int $order_id, GadgetCustomDetails $details, int $user_id = null, int $company_id = null): array
    {
        // Gadget Création
        $gadget = new KoGadget();
        $gadget->user_id = $user_id ?? Auth::id();
        $gadget->company_id = $company_id ?? null;
        $gadget->ko_gadget_item_id = $kitemId;
        $img = null;
        if ($details->file !== null) {
            $img = (new UploadService())->uploadFile(file: $details->file, rootPath: CUSTOM_LOGO_PATH);
        }
        $details->file = $img != null ? $img['data'] : null;
        $gadget->custom_details = json_encode($details);
        $gadget->order_id = $order_id;
        $gadget->save();

        return Utils::json_res(true, "Gadget successfully added", null, Response::HTTP_CREATED);
    }
}
