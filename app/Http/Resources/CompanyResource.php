<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CompanyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            "created_at"=> $this->created_at,
            "uuid"=> $this->uuid,
            "name"=> $this->name,
            "email"=> $this->email,
            "industry"=> $this->industry,
            "tax_id"=> $this->tax_id,
            "website"=> $this->website,
            "brand_logo_img"=> $this->brand_logo_img,
            "address"=> $this->address,
            "city"=> $this->city,
            "country"=> $this->country,
            "description"=> $this->description,
            "videos"=> $this->videos,
            "socialProfils"=> $this->socialProfils,
            "user" => new UserResource($this->whenLoaded("owner")),
            "members"=> CompanyMemberResource::collection($this->whenLoaded("members")),
        ];
    }
}
