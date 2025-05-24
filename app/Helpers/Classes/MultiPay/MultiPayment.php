<?php

namespace App\Helpers\Classes\MultiPay;

use App\Helpers\Classes\MultiPay\Contracts\Interfaces\MultiPayProviderInterface;
use App\Helpers\Classes\MultiPay\Contracts\Types\MultiPayResponse;
use App\Helpers\Classes\MultiPay\Providers\PaypalProvider;
use App\Helpers\Classes\MultiPay\Providers\StripeProvider;
use App\Helpers\Enums\ActionStatus;
use Illuminate\Http\Request;

class MultiPayment implements MultiPayProviderInterface
{
    public function __construct(public ?string $provider= null)
    {
        if (empty($provider)) {
            $this->provider= config('multipay.default_provider');
        }
    }

    public function create(mixed $data, mixed $item, Request $request): MultiPayResponse
    {
        if ($this->provider==='stripe' && in_array('stripe', config('multipay.allowed_providers'), true)) {
            return (new StripeProvider())->create($data,$item,$request);
        }

        if ($this->provider==='paypal' && in_array('paypal', config('multipay.allowed_providers'), true)) {
            return (new PaypalProvider())->create($data,$item,$request);
        }

        return new MultiPayResponse(status: ActionStatus::FAILED, isSuccess: false, message: "The selected payment provider is not supported by the app");

    }

    public function success(mixed $data, Request $request): MultiPayResponse
    {
        if ($this->provider==='stripe' && in_array('stripe', config('multipay.allowed_providers'), true)) {
            return (new StripeProvider())->success($data,$request);
        }

        if ($this->provider==='paypal' && in_array('paypal', config('multipay.allowed_providers'), true)) {
            return (new PaypalProvider())->success($data,$request);
        }

        return new MultiPayResponse(status: ActionStatus::FAILED, isSuccess: false, message: "The selected payment provider is not supported by the app");

    }

    public function refund(string $transactionId): MultiPayResponse
    {
        return new MultiPayResponse(status: ActionStatus::FAILED, isSuccess: false, message: "");
    }

    public function checkStatus(string $transactionId): ActionStatus
    {
        return ActionStatus::COMPLETED;
    }
}
