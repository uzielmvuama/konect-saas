<?php

namespace App\Data;

use Spatie\LaravelData\Attributes\Validation\IP;
use Spatie\LaravelData\Attributes\Validation\Uuid;
use Spatie\LaravelData\Data;

class UserDoKonectData extends Data
{
    public function __construct(
        #[Uuid()]
        public string $uuid,
        public  int $way,
        public? string $ip= null
    ) {}

    public  function setIp(
        #[IP()]
        string $ip)
    {
        $this->ip= $ip;
    }
}
