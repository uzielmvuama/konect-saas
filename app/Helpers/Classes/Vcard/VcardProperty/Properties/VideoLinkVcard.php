<?php

namespace App\Helpers\Classes\Vcard\VcardProperty\Properties;

use App\Helpers\Classes\Vcard\VcardProperty\VcardProperty;

class VideoLinkVcard extends VcardProperty
{
    public function __construct(public string $uri, public string $type = "")
    {
    }
}
