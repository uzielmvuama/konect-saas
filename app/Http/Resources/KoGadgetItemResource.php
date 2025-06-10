<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class KoGadgetItemResource extends JsonResource
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
            "kg_details" => is_string($this->kg_details) ? json_decode($this->kg_details) : $this->kg_details,
            "kg_code" => $this->kg_code,
            "kg_name" => $this->kg_name,
        ];
    }
}
