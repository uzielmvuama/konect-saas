<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class KonectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $ko_user= json_decode($this->ko_user_info);
        $kuser = User::where('email', $ko_user->email);
        $ko_user->kuser= $kuser->exists() ? $kuser->first() : null;

        return [
            "ko_ip_konect" => $this->ko_ip_konect,
            "ko_ip_locations" => is_string($this->ko_ip_locations) == "string" ? json_decode($this->ko_ip_locations) : $this->ko_ip_locations,
            "ko_social_clicked" => $this->ko_social_clicked,
            "ko_phone_clicked" => $this->ko_phone_clicked,
            "user" => new UserResource($this->whenLoaded("user")),
            "konect_category_id" => $this->konect_category_id,
            "created_at" => $this->created_at,
            "ko_user_info" => $ko_user,
        ];
    }
}
