<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('payment_method');
            $table->json('provider_order_id');
            $table->enum("status", array_map(fn($status) => $status->value, \App\Helpers\Enums\ActionStatus::cases())
            )->default(\App\Helpers\Enums\ActionStatus::INITIALIZED->value);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
