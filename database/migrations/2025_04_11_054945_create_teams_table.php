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
        Schema::create('teams', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->index();
            $table->string('name');
            $table->boolean('personal_team');
            $table->string('email')->unique()->nullable();
            $table->string('industry')->nullable();
            $table->string('tax_id')->nullable(); # Numéro d’identification fiscale (utile pour la facturation B2B).
            $table->string('website')->nullable();
            $table->string('brand_logo_img')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('country')->nullable();
            $table->string('description')->nullable();
            $table->string('phone')->nullable();
            $table->json('videos')->nullable();
            $table->json('socialProfils')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teams');
    }
};
