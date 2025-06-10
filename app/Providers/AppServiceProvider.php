<?php

namespace App\Providers;

use App\Models\Team;
use App\Models\KoGadget;
use App\Models\KoGadgetItem;
use App\Models\Konect;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Laravel\Cashier\Cashier;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        require_once base_path('app/constants.php');
        Route::bind('uuid', function (string $value) {
            return User::where('uuid', $value)->firstOrFail();
        });

        Route::bind('konect_uuid', function (string $value) {
            return Konect::where('uuid', $value)->firstOrFail();
        });

//        Route::bind('company_member', function (string $value) {
//            return CompanyMember::where('uuid', $value)->firstOrFail();
//        });
//
//        Route::bind('company', function (string $value) {
//            return Company::where('uuid', $value)->firstOrFail();
//        });

        Route::bind('order_uuid', function (string $value) {
            return Order::where('uuid', $value)->firstOrFail();
        });

        Route::bind('order_id', function (string $value) {
            return Order::find($value);
        });
        Route::bind('code', function (string $value) {
            return KoGadgetItem::where('kg_code', $value)->firstOrFail();
        });

        Route::bind('ko_uuid', function (string $value) {
            $default_uuid = env('APP_ENV') == "production" ? "4fb07f74-a2aa-43b0-8be5-855f0fe16c20" : "df71a3ca-a3f1-11ef-b1ab-da06989825a9";

            $uuid = $value == "k" ? $default_uuid : $value;

            return KoGadget::where('uuid', $uuid)->firstOrFail();
        });

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Cashier::calculateTaxes();
        JsonResource::withoutWrapping();
    }
}
