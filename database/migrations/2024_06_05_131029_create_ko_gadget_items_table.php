<?php

use App\Helpers\Classes\Gadget\Gadget;
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
        Schema::create('ko_gadget_items', function (Blueprint $table) {
            $statement = DB::select("SHOW TABLE STATUS LIKE 'ko_gadget_items'");
            if(isset($statement[0])){
                $nextId = $statement[0]->Auto_increment;
            }else{
                $nextId =1;

            }

            $table->id();
            $table->timestamps();
            $table->json("kg_details");
            $table->string("kg_code")->nullable()->default(Gadget::cardCodePrefix($nextId));
            $table->string("kg_name")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ko_gadget_items');
    }
};
