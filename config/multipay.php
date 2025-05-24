<?php

return [
    'is_sandbox' => env('MULTIPAY_IS_SANDBOX', false),
    'allowed_providers' => explode(',', env('ALLOWED_PAYMENT_PROVIDERS', 'stripe')),
    'default_provider' => env('DEFAULT_PAYMENT_PROVIDER', 'stripe'),
];
