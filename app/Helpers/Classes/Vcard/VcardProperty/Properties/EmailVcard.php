<?php
namespace App\Helpers\Classes\Vcard\VcardProperty\Properties;

use App\Helpers\Classes\Vcard\VcardProperty\VcardProperty;

class EmailVcard extends VcardProperty
{
    public function __construct(public string $text, public string $type = "work")
    {
    }
}
