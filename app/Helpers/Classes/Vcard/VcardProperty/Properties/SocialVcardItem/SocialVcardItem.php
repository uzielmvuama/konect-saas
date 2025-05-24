<?php
namespace App\Helpers\Classes\Vcard\VcardProperty\Properties\SocialVcardItem;

class SocialVcardItem
{
    public function __construct(public string $uri, public string $type="")
    {
    }
}
