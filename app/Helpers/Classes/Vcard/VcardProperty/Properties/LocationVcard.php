<?php
namespace App\Helpers\Classes\Vcard\VcardProperty\Properties;

use App\Helpers\Classes\Vcard\VcardProperty\VcardProperty;

class LocationVcard extends VcardProperty
{
    public function __construct(
        public $ip= null,
        public $iso_code= null,
        public $country= null,
        public $city= null,
        public $state= null,
        public $state_name= null,
        public $postal_code= null,
        public $lat= null,
        public $lon= null,
        public $timezone= null,
        public $continent= null,
        public $currency= null,
        public $deFault= null,
    ) {
    }

    final public function encode () : string {
        return json_encode($this);
}


}
