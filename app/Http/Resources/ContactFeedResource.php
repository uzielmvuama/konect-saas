<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ContactFeedResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "created_at" => $this->created_at,
            "feed_info" => is_string($this->feed_info) ? json_decode($this->feed_info) : $this->feed_info,
            "user_to" => new UserResource($this->whenLoaded("target"))
        ];
    }
}
