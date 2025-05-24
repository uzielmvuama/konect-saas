<?php

namespace App\Helpers\Classes\Gadget;

use App\Helpers\Classes\Gadget\Gcolor;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;

class GadgetCustomDetails
{

    public function __construct(
        public string $name,
        public string $firstname,
        public string $title,
        public string $quantity,
        public UploadedFile|string|null $file = null
    ) {}
}
