<?php

namespace App\Helpers\Classes\Vcard\VcardProperty\Properties;

use App\Helpers\Classes\Vcard\VcardProperty\VcardProperty;

class UrlVcard extends VcardProperty
{
    public function __construct(public ?string $type = "", public ?string $uri = "")
    {
    }
}
