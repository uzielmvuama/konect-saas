<?php

namespace App\Helpers\Classes\Vcard;

use App\Helpers\Classes\Vcard\VcardProperty\Properties\PhoneVcard;

class UserVcard extends VcardModel
{
    public array $phones = [];
    public string $title = "";

    public function __construct($vinfo = null)
    {
        parent::__construct($vinfo);
        if (empty($vinfo)) {
            $this->title = "";
            $this->phones = [];
        } else {
            $vinfo = json_decode($vinfo);
            $this->title = $vinfo->title;

            if (is_array($vinfo->phones)) {
                foreach ((array) $vinfo->phones as $ph) {
                    $this->phones[] = new PhoneVcard(type: $ph->type, text: $ph->text);
                }
            } elseif (is_object($vinfo->phones)) {
                $this->phones[] = new PhoneVcard(type: $vinfo->phones->type, text: $vinfo->phones->text);

                array_push($this->phones, new PhoneVcard(type: $vinfo->phones->type, text: $vinfo->phones->text));
            }
        }
    }

    public function addPhone(PhoneVcard $phone)
    {
        $this->phone[] = $phone;
    }

    public function addTitle(string $title)
    {
        $this->title = $title;
    }
}
