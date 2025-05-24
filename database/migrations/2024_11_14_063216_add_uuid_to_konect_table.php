<?php

use App\Models\Konect;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('konects', function (Blueprint $table) {
            $table->uuid('uuid')->unique()->nullable()->after('id'); // Ajout d'une colonne UUID
        });

        Konect::whereNull('uuid')->each(function ($record) {
            $record->uuid = Str::uuid(); // Génère un UUID unique
            $record->save();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('konects', function (Blueprint $table) {
            $table->dropColumn('uuid'); // Suppression de la colonne UUID en cas de rollback
        });
    }
};
