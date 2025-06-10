<?php

namespace Database\Factories;

use App\Helpers\Core\Utils;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Konect>
 */
class KonectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $ip= fake()->ipv4();
        $locations = Utils::getUserLocation($ip, false);
        $locations->lat= fake()->latitude(25)- random_int(1, 100);
        $locations->lon= fake()->longitude(25) - random_int(1, 100);

        $user_info= [
            "name" =>fake()->name(),
            "firstname" => fake()->firstname(),
            "phone" => fake()->phoneNumber(),
            "email" => fake()->freeEmail(),
        ];
        return [
            "ko_ip_konect" => $ip,
            "ko_ip_locations" =>json_encode($locations->encode()),
            "ko_social_clicked" => 0,
            "ko_phone_clicked" => 1,
            "user_id" => 1,
            "ko_user_info" =>\json_encode($user_info),
            "konect_category_id" => 1,
            "created_at" => fake()->dateTimeBetween('-90 days')
        ];
    }
}
