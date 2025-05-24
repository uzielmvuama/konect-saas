<?php

namespace App\Helpers\Classes\Vcard;

use App\Helpers\Classes\Vcard\VcardProperty\Properties\PhoneVcard;

class UserVcard extends VcardModel
{
    public array $phone = [];

    public function __construct($vinfo = null)
    {
        parent::__construct($vinfo);
        if (empty($vinfo)) {
            $this->phone[] = new PhoneVcard(type: "personal", text: "");
        } else {
            $vinfo = json_decode($vinfo);
            if (is_array($vinfo->phone)) {
                foreach ((array) $vinfo->phone as $ph) {
                    $this->phone[] = new PhoneVcard(type: $ph->type, text: $ph->text);
                }
            } elseif (is_object($vinfo->phone)) {
                $this->phone[] = new PhoneVcard(type: $vinfo->phone->type, text: $vinfo->phone->text);

                array_push($this->phone, new PhoneVcard(type: $vinfo->phone->type, text: $vinfo->phone->text));
            }
        }
    }

    public function addPhone(PhoneVcard $phone)
    {
        $this->phone[] = $phone;
    }
}
