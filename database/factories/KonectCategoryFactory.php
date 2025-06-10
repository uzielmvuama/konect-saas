<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\KonectCategory>
 */
class KonectCategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Récupère tous les IDs des utilisateurs existants
        $userIds = User::pluck('id')->toArray();

        return [
            'kc_label' => fake()->word(),
            'user_id' => fake()->randomElement($userIds),
        ];
    }
}
