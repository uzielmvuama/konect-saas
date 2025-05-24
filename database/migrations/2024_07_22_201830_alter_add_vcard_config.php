<?php

use App\Helpers\Classes\Vcard\VcardConfig\VcardConfig;
use App\Helpers\Classes\Vcard\VcardConfig\VcardConfigTheme;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $vcardConfigTheme = new VcardConfigTheme(
                primaryColor: "#ffffff"
            );
            $vcardConfig = new VcardConfig(
                isCardActivated: true,
                showLocalization: true,
                showKonects: true,
                configTheme: $vcardConfigTheme);
            $table->json('vconfig')->default($vcardConfig->json_gen());
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('vconfig');
        });
    }
};
