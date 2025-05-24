<?php
namespace App\Helpers\Classes\Vcard\VcardProperty\Properties;

use App\Helpers\Classes\Vcard\VcardProperty\VcardProperty;

class AdressVcard extends VcardProperty
{
    public function __construct(public string $type="work", public string $text,  public string $street,  public string $locality,  public string $region,  public string $code,  public string $country)
    {
    }
}
