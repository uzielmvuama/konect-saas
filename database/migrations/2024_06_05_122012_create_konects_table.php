<?php

use App\Models\KonectCategory;
use App\Models\User;
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
        Schema::create('konects', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->ipAddress('ko_ip_konect');
            $table->json('ko_ip_locations');
            $table->boolean('ko_social_clicked')->default(false);
            $table->boolean('ko_phone_clicked')->default(false);
            $table->boolean('ko_share_clicked')->default(false);
            $table->json('ko_user_info')->nullable();
        });

        Schema::table('konects', function (Blueprint $table) {
            $table->foreignIdFor(User::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(KonectCategory::class)->default(1)->constrained();
        });

        Schema::table('konect_categories', function (Blueprint $table) {
            $table->foreignIdFor(User::class)->constrained()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('konects');
    }
};
