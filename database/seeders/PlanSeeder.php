<?php

namespace Database\Seeders;

use App\Models\Plan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Plan::insert([
            [
                'name' => 'Starter',
                'slug' => 'starter',
                'price_cents' => 0,
                'interval' => null,
                'stripe_price_id' => '',
            ],
            [
                'name' => 'Premium Mensuel',
                'slug' => 'premium-monthly',
                'price_cents' => 990,
                'interval' => 'month',
                'stripe_price_id' => 'price_xxx_monthly',
            ],
            [
                'name' => 'Pro NFC Unique',
                'slug' => 'pro-onetime',
                'price_cents' => 4999,
                'interval' => 'onetime',
                'stripe_price_id' => 'price_xxx_onetime',
            ],
        ]);
    }
}
