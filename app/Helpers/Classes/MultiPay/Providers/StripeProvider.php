<?php

namespace App\Helpers\Classes\MultiPay\Providers;

use App\Helpers\Classes\Gadget\GadgetCustomDetails;
use App\Helpers\Classes\MultiPay\Contracts\Interfaces\MultiPayProviderInterface;
use App\Helpers\Classes\MultiPay\Contracts\Types\MultiPayResponse;
use App\Helpers\Core\Constants;
use App\Helpers\Enums\ActionStatus;
use App\Helpers\Services\GadgetService;
use App\Models\Order;
use App\Models\Plan;
use Illuminate\Http\Request;
use Laravel\Cashier\Cashier;
use Laravel\Cashier\Checkout;

class StripeProvider implements MultiPayProviderInterface
{

    final public function create(mixed $data, mixed $item, Request $request): MultiPayResponse
    {
        $user = $request->user();

        $customFirstname = strtolower($data['givenName']);
        $customName = strtolower($data['familyName']);
        $customCompany = strtolower($data['title']);
        $qte = (int)$data['qteValue'];

        $koGadgetItem = $item->id ?? null;
        if ($koGadgetItem->id == 1) {
            if ($request->hasFile("img")) {
                $stripePriceId = config('multipay.is_sandbox') ? 'price_1PmtPiJYKdyIYjKy9EErPwHg' : 'price_1PmtRwJYKdyIYjKyECXFWw2p';
            } else {
                $stripePriceId = config('multipay.is_sandbox') ? 'price_1PTfb8JYKdyIYjKy6VM9T2i0' : 'price_1Phnc8JYKdyIYjKyo850NyWh';
            }
        }

        //  else if ($koGadgetItem->id == 2) {
        //     $stripePriceId = 'price_1Pfr5FJYKdyIYjKy4rOR71hN';
        // } else if ($koGadgetItem->id == 3) {
        //     $stripePriceId = 'price_1PhngdJYKdyIYjKy7LtQP7y8';
        // }


        $order = Order::create(["payment_method" => Constants::PAYMENT_METHOD_STRIPE, "payload" => json_encode([]),]);

        // Gadget Création
        $gadget = new GadgetService();
        $gadget->makeGadget($koGadgetItem->id, $order->id, new GadgetCustomDetails(name: $customName, firstname: $customFirstname, title: $customCompany, quantity: $qte, file: $request->file("img")));


        $checkout = $user->checkout([$stripePriceId => $qte], ['success_url' => env('FRONTED_APP_URL') . "/payment/success" . '/{CHECKOUT_SESSION_ID}', 'cancel_url' => env('FRONTED_APP_URL') . "/payment/cancel", 'shipping_address_collection' => ["allowed_countries" => ["CA", "US"],], 'allow_promotion_codes' => true, "customer_update" => ["shipping" => "auto"], //                "shipping_options" => [["shipping_rate" => "shr_1PUBR9JYKdyIYjKy8hZum9cc"]],
            'metadata' => ['order_id' => $order->id,]

        ]);
        return new MultiPayResponse(status: ActionStatus::PROGRESS, transactionId: '', isSuccess: true, message: 'Create successfully done', raw: $checkout);
    }

    final public function success(mixed $data, Request $request): MultiPayResponse
    {
        $sessionId = $request->get('session_id');
        //        dd($sessionId);
        if ($sessionId === null) {
            return new MultiPayResponse(status: ActionStatus::FAILED, isSuccess: false, message: 'Stripe Session not found');
        }
        $session = Cashier::stripe()->checkout->sessions->retrieve($sessionId);

        $orderId = $session['metadata']['order_id'] ?? null;

        if ($orderId === null) {
            return new MultiPayResponse(status: ActionStatus::FAILED, isSuccess: false, message: 'Order not found');
        }


        if ($session->payment_status !== 'paid') {
            return new MultiPayResponse(status: ActionStatus::UNCOMPLETED, isSuccess: false, message: 'Order not paid');
        }

        $order = Order::findOrFail($orderId);
        $order->is_closed = true;
        $order->payload = json_encode(["session_id" => $sessionId]);
        $order->save();

//        event(new OrderDoneEvent($request->user(), $order->gadget));

        // return view('checkout-success', ['order' => $order, 'payload'=> $session]);
        return new MultiPayResponse(status: ActionStatus::SUCCESS, transactionId: $sessionId, isSuccess: true, message: 'Paiement successfully done', raw: $data);

    }

    final public function refund(string $transactionId): MultiPayResponse
    {
        return true; // Simulation
    }

    final public function checkStatus(string $transactionId): ActionStatus
    {
        return ActionStatus::COMPLETED;
    }


    final public function subscriptionCreate(Plan $plan, Request $request): Checkout
    {
        $user = $request->user();

//        dd($user);

        $checkout =  $user->newSubscription($plan->stripe_product_id, $plan->stripe_price_id)->checkout([        'success_url' => route('checkout.subscribe.success', ['session_id' => ':session.id']),
            'cancel_url' =>route('checkout.cancel')]);

//        ->trialDays(config('cashier.trial_days'))
//        ->allowPromotionCodes()
        return $checkout;

    }

    public function subscriptionSuccess (mixed $data, Request $request) : MultiPayResponse
    {
        $sessionId = $data;
        return new MultiPayResponse(status: ActionStatus::PROGRESS, transactionId: '', isSuccess: true, message: 'Subscriptions successfully done', raw: $sessionId);
    }

}
