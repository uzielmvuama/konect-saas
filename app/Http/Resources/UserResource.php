<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

use function PHPUnit\Framework\isString;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'firstname' => $this->firstname,
            'email' => $this->email,
            'vinfo' => is_string($this->vinfo) ? json_decode($this->vinfo) : $this->vinfo,
            "uuid" => $this->uuid,
            "profile_photo_path" => $this->profile_photo_path,
            "created_at" => $this->created_at,
            "vconfig" => is_string($this->vconfig) ? json_decode($this->vconfig) : $this->vconfig,
            "role" => $this->role,
            'kpoint' => $this->kpoint,
            "referal_code" => $this->referal_code,
            "referal_from" => "referal_from",
            "konects" => KonectResource::collection($this->whenLoaded("konects")),
            "contact_feeds" => ContactFeedResource::collection($this->whenLoaded("contact_feeds")),
            "companies" => CompanyResource::collection($this->whenLoaded("companies")),
            "gadgets" => KoGadgetResource::collection($this->whenLoaded("gadgets")),
            "konect_categories" => KonectCategoryResource::collection($this->whenLoaded("konect_categories")),
            "konects_count" => $this->konects_count
        ];
    }
}
