<?php

namespace Database\Seeders;

use App\Helpers\Classes\Gadget\Gadget;
use App\Helpers\Classes\Gadget\Gcolor;
use App\Models\KoGadgetItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KoGadgetItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    public function run(): void
    {
        $whiteNfcCardRegular = new Gadget(name: __("White card", locale: "en"), description: "white_card_desc", price: 47.59, oldPrice: 77.29, weightDimensions: 100, color: new Gcolor(name: "white", hexaCode: "#ffffff"), material: "pvc", imageURL: ["/assets/images/app/gadgets/White Black Logo - Front.png", "/assets/images/app/gadgets/White Black Logo - Back.png", "/assets/images/app/cards/Regular.png"], type: Gadget::$cardtype);
        $whiteNfcCardCustomLogo = new Gadget(name: __("White card with custom logo", locale: "en"), description: "white_card_custom_logo_desc", price: 67.59, oldPrice: 97.29, weightDimensions: 100, color: new Gcolor(name: "white", hexaCode: "#ffffff"), material: "pvc", imageURL: ["/assets/images/app/gadgets/White Custom Logo Back.png", "/assets/images/app/gadgets/White Black Logo - Back.png", "/assets/images/app/cards/Custom Logo.png"], type: Gadget::$cardtype);
        // $whiteNfcCardCustomCard = new Gadget(name: __("White Card NFC Customized Design", locale: "en"), description: "white_card_custom_design_desc", price: 97, oldPrice: 107.29, weightDimensions: 100, color: new Gcolor(name: "white", hexaCode: "#ffffff"), material: "pvc", imageURL: ["/assets/images/app/gadgets/White Black Logo - Front.png", "/assets/images/app/gadgets/White Black Logo - Back.png", "/assets/images/app/cards/Custom Design.png"], type: Gadget::$cardtype);
        // $blackNfcCard = new Gadget(name: __("Black Card NFC", locale: "en"), description: "black_card_desc", price: 59, weightDimensions: 100, color: new Gcolor(name: "black", hexaCode: "#000000"), material: "pvc", imageURL: ["/assets/images/app/gadgets/Black White Logo - Front.png", "/assets/images/app/gadgets/Black White Logo - Back.png"], type: Gadget::$cardtype);
        // $blackYellowNfcCard = new Gadget(name: __("Yellow Black Card NFC", locale: "en"), description: "black_card_desc", price: 59, weightDimensions: 100, color: new Gcolor(name: "black text yellow", hexaCode: "#000000"), material: "pvc", imageURL: ["/assets/images/app/gadgets/Black Yellow Logo - Front.png", "/assets/images/app/gadgets/Black Yellow Logo - Back.png"], type: Gadget::$cardtype);

        // $blackRing = new Gadget(name: __("NFC Ring", locale: "en"), description: "plan.white_ring_desc", price: 25, weightDimensions: 300, color: new Gcolor(name: "black", hexaCode: "#000000"), material: "iron", imageURL: [], type: Gadget::$ringtype);
        // $whiteRing = new Gadget(name: __("NFC Ring", locale: "en"), description: "plan.black_ring_desc", price: 25, weightDimensions: 300, color: new Gcolor(name: "white", hexaCode: "#ffffff"), material: "iron", imageURL: [], type: Gadget::$ringtype);

        $all = [
            $whiteNfcCardRegular,
            $whiteNfcCardCustomLogo        ];

        $i = 1;
        foreach ($all as $gd) {
            $gadget = new KoGadgetItem();
            $gadget->kg_code = "CRD-00" . $i;
            $gadget->kg_details = $gd->json_gen();
            $gadget->kg_name = strtolower(str_replace(' ', "_", $gd->name));
            $gadget->save();
            $i++;
        }
    }
}
