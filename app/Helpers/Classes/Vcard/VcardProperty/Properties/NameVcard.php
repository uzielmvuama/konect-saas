<?php

namespace App\Helpers\Classes\Vcard\VcardProperty\Properties;

use App\Helpers\Classes\Vcard\VcardProperty\VcardProperty;

class NameVcard extends VcardProperty
{
    public function __construct(public string $givenName, public ?string $familyName, public ?string $middleName,  public ?string $prefix,  public ?string $suffix)
    {
    }
}

