<?php

namespace App\Helpers\Classes\MultiPay\Contracts\Types;

use App\Helpers\Enums\ActionStatus;

class MultiPayResponse
{
    public function __construct(
        public ActionStatus $status,
        public ?string       $transactionId= null,
        public ?bool $isSuccess = true,
        public ?string      $message = null,
        public ?array       $raw = []
    ) {}

    public function toArray(): array
    {
        return [
            'status' => $this->status->value,
            'transaction_id' => $this->transactionId ?? null,
            'is_success' => $this->isSuccess,
            'message' => $this->message,
            'raw' => $this->raw,
        ];
    }
}
