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
                'name' => 'Pro',
                'slug' => 'pro',
                'price' => 15,
                'stripe_product_id' => 'prod_SS8j3dNNU3HhyT',
                'stripe_price_id' => 'price_1RXESDBCFuQSEi30z2RtA15P',
            ],
            [
                'name' => 'Team',
                'slug' => 'team',
                'price' => 45,
                'stripe_product_id' => 'prod_SS8kSinzqCKvry',
                'stripe_price_id' => 'price_1RXESiBCFuQSEi30TNvtxEjK',
            ],
            [
                'name' => 'Entreprise',
                'slug' => 'entreprise',
                'price' => 199,
                'stripe_product_id' => 'prod_SS8k8Dy9sZoJn6',
                'stripe_price_id' => 'price_1RXET8BCFuQSEi30qRpaYiMq',
            ],
        ]);
    }
}
