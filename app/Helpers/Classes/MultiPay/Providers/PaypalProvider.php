<?php

namespace App\Helpers\Classes\MultiPay\Providers;

use App\Helpers\Classes\Gadget\GadgetCustomDetails;
use App\Helpers\Classes\MultiPay\Contracts\Interfaces\MultiPayProviderInterface;
use App\Helpers\Classes\MultiPay\Contracts\Types\MultiPayResponse;
use App\Helpers\Core\Constants;
use App\Helpers\Enums\ActionStatus;
use App\Helpers\Services\GadgetService;
use App\Models\Order;
use Exception;
use Illuminate\Http\Request;
use Laravel\Cashier\Cashier;
use Srmklive\PayPal\Services\PayPal as PayPalClient;
use Throwable;

class PaypalProvider implements MultiPayProviderInterface
{

    final public function create(mixed $data, mixed $item, Request $request): MultiPayResponse
    {
        $user = $request->user();

        $customFirstname = strtolower($data['givenName']);
        $customName = strtolower($data['familyName']);
        $customCompany = strtolower($data['title']);
        $qte = (int)$data['qteValue'];

        $koGadgetItem = $item ?? null;

        $details = new GadgetCustomDetails(
            name: $customName,
            firstname: $customFirstname,
            title: $customCompany,
            quantity: $qte,
            file: $request->file("img")
        );

        $provider = new PayPalClient;
        try {
            $provider->setApiCredentials(config('paypal'));
             $provider->getAccessToken();
            $provider->setCurrency('CAD');
            $order = Order::create(
                [
                    "payment_method" => Constants::PAYMENT_METHOD_PAYPAL,
                    "payload" => json_encode([]),
                ]
            );

            $data = [
                "intent" => "CAPTURE",
                "application_context" => [
                    "brand_name" => config('app.name'),
                    // "landing_page" => "BILLING",
                    /*
                    "locale" => "en-US",
                    "shipping_preference" => "SET_PROVIDED_ADDRESS",
                    "user_action" => "SUBSCRIBE_NOW",
                    "payment_method" => [
                        "payer_selected" => "PAYPAL",
                        "payee_preferred" => "IMMEDIATE_PAYMENT_REQUIRED"
                    ], */
                    'return_url' => env('FRONTED_APP_URL') . "/payment/success" . '/' . $order->uuid,
                    'cancel_url' => env('FRONTED_APP_URL') . "/payment/cancel",
                    // "return_url" => route('payment.paypal.success', [
                    //     "name" => $customName,
                    //     "firstname" => $customFirstname,
                    //     "company" => $customCompany,
                    //     "qte" => $qte,
                    //     "kitemId" => $koGadgetItem->id
                    // ]),
                ],
                "purchase_units" => [
                    [
                        "amount" => [
                            "currency_code" => "CAD",
                            "value" => json_decode($koGadgetItem->kg_details)->price
                        ],
                        // 'custom_id' => [
                        //     'order_id' => $order->id,
                        // ]
                    ]
                ]
            ];

            $pLink = null;

            $response = $provider->createOrder($data);
            if (!empty($response['id'])) {
                $order->update(
                    [
                        "payload" => json_encode([
                            "session_id" => $response['id'],
                            "gadget_details" => json_encode($details)
                        ], JSON_THROW_ON_ERROR),
                    ]
                );
                $gadget = new GadgetService();
                $gadget->makeGadget($koGadgetItem->id, $order->id, $details);

                foreach ($response['links'] as $link) {
                    if ($link['rel'] === 'approve') {
                        $pLink = $link["href"];
                    }
                }
            }
        } catch (Exception|Throwable $e) {
            return new MultiPayResponse(status: ActionStatus::FAILED, isSuccess: false, message: $e->getMessage());
        }

        return new MultiPayResponse(status: ActionStatus::PROGRESS, transactionId: '', isSuccess: true, message: 'Create successfully done', raw: [
            "url" =>  $pLink
        ]);

    }

    final public function success(mixed $data, Request $request): MultiPayResponse
    {
        $order= $data;
        $order_payload = json_decode($order->payload);
        $details = json_decode($order_payload->gadget_details);
        $customFirstname = $details->firstname;

        $customName = $details->name;
        $customCompany = $details->title;
        $qte = $details->quantity;


        $provider = new PayPalClient;
        try {
            $provider->setApiCredentials(config('paypal'));
            $provider->getAccessToken();
            $response = $provider->capturePaymentOrder($order_payload->session_id);
            if (isset($response['status']) and $response['status'] == 'COMPLETED') {
                $order->is_closed = true;
                $order->save();
                return new MultiPayResponse(status: ActionStatus::SUCCESS, transactionId: $order_payload->session_id,
                    isSuccess: true, message: 'Paiement successfully done', raw: $order_payload);
            }

            return new MultiPayResponse(status: ActionStatus::FAILED,
                transactionId: $order_payload->session_id, isSuccess: false, message: 'Paiement failed', raw: $order_payload);

        } catch (Exception|Throwable $e) {
            return new MultiPayResponse(status: ActionStatus::FAILED, isSuccess: false, message: $e->getMessage());
        }

    }

    final public function refund(string $transactionId): MultiPayResponse
    {
        return true; // Simulation
    }

    final public function checkStatus(string $transactionId): ActionStatus
    {
        return ActionStatus::COMPLETED;
    }


}
