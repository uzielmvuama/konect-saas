<?php

namespace App\Http\Controllers;

use App\Helpers\Classes\MultiPay\MultiPayment;
use App\Helpers\Enums\ActionStatus;
use App\Models\Book;
use App\Models\KoGadgetItem;
use App\Models\Order;
use App\Services\OrderService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Srmklive\PayPal\Services\PayPal as PayPalClient;
use Symfony\Component\HttpFoundation\Response;

class PaymentController
{

    public function create(KoGadgetItem $koGadgetItem, Request $request)
    {
        $data = $request->only(['givenName', 'familyName', 'title', 'qteValue']);
        return (new MultiPayment())->create($data, $koGadgetItem, $request)->toArray();
    }
    public function success(Order $order, Request $request)
    {
        $payment = (new MultiPayment())->success($order, $request);
        if ($payment->isSuccess && $payment->status === ActionStatus::SUCCESS) {
            return Inertia::render('Payment/PaymentSuccess', [
                'is_closed' => $order->is_closed,
                'buyer_name' => $order->buyer_firstname,
                'buyer_email' => $order->buyer_email,
                'message' => 'Paiement effectué avec succès!',
            ]);
        }
        return Inertia::render('Payment/PaymentError', [
//            'order' => $order->only(['id', 'buyer_name', 'buyer_email']),
//            'message' => 'Paiement effectué avec succès!',
        ]);
    }
    public function cancel()
    {
        return Inertia::render('Payment/PaymentError');
    }
}
