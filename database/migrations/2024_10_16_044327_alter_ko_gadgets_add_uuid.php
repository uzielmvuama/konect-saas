<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('ko_gadgets', function (Blueprint $table) {
            $table->uuid('uuid')->after('id')->unique()->default(DB::raw('(UUID())'));
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('ko_gadgets', function (Blueprint $table) {
            $table->dropColumn('uuid');
        });
    }
};
