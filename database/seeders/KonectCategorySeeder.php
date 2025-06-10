<?php

namespace Database\Seeders;

use App\Models\KonectCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KonectCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        KonectCategory::factory(25)->create();
    }
}
