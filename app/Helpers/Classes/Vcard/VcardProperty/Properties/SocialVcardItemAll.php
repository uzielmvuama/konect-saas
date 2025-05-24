<?php
namespace App\Helpers\Classes\Vcard\VcardProperty\Properties;
use  App\Helpers\Classes\Vcard\VcardProperty\Properties\SocialVcardItem\SocialVcardItem;

class SocialVcardItemAll
{
    public function __construct(public SocialVcardItem $facebook, public SocialVcardItem $instagram, public SocialVcardItem $twitter, public SocialVcardItem $youtube, public SocialVcardItem $tiktok, public SocialVcardItem $linkedin, public SocialVcardItem $pinterest)
    {
    }
}

