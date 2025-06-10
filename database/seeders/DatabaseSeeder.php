<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->withPersonalTeam()->create();

        $this->call([
            IndustrySeeder::class,
            PlanSeeder::class,
        ]);
        User::factory()->withPersonalTeam()->create([
            'name' => 'test',
            'firstname'=> 'user',
            'email' => 'test@example.com',
        ]);
        $this->call([
            KonectCategorySeeder::class,
            KonectSeeder::class
        ]);



    }
}
