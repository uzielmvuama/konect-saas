<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class UserFeedData extends Data
{
    public function __construct(
        public string $firstname,
        public string $name,
        public string $email,
        public string $phone,
        public ?string $comment
    ) {}
}
