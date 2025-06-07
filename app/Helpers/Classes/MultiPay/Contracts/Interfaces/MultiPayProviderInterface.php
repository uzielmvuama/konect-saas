<?php

namespace App\Helpers\Classes\MultiPay\Contracts\Interfaces;

use App\Helpers\Classes\MultiPay\Contracts\Types\MultiPayResponse;
use App\Helpers\Enums\ActionStatus;
use App\Models\Plan;
use Illuminate\Http\Request;
use Laravel\Cashier\Checkout;

interface MultiPayProviderInterface
{
    public function create(mixed $data, mixed $item, Request $request): MultiPayResponse;
    public function subscriptionCreate(Plan $plan, Request $request) : Checkout;

    public function subscriptionSuccess(mixed $data, Request $request): MultiPayResponse;

    public function success(mixed $data, Request $request): MultiPayResponse;
    public function refund(string $transactionId): MultiPayResponse;

    public function checkStatus(string $transactionId): ActionStatus;
}
