<?php

use App\Helpers\Core\MemberRequestStatus;
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
        Schema::create('team_user', function (Blueprint $table) {
            $table->id();
            $table->foreignId('team_id');
            $table->foreignId('user_id');
            $table->string('role')->nullable();
            $table->timestamp('joined_at')->nullable();
            $table->string("team_email")->nullable();
            $table->string('phone_ext')->nullable();
            $table->boolean('active')->default(true); # Statut pour savoir si l’utilisateur est toujours membre dans cette entreprise.
            $table->enum("request_status", array_map(fn($status) => $status->value, MemberRequestStatus::cases()))->default(MemberRequestStatus::PENDING->value);
            $table->timestamps();

            $table->unique(['team_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('team_user');
    }
};
