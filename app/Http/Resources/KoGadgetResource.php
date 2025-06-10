<?php

namespace App\Http\Resources;

use App\Models\CompanyMember;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class KoGadgetResource extends JsonResource
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
            "uuid" => $this->uuid,
            "created_at" => $this->created_at,
            "is_active" => $this->is_active,
            "custom_details" => is_string($this->custom_details) ? json_decode($this->custom_details) : $this->custom_details,
            "order" => new OrderResource($this->whenLoaded("order")),
            "gadget" => new KoGadgetItemResource($this->whenLoaded("gadget")),
            "company" => new CompanyResource($this->whenLoaded("company")),
            "owner" => new UserResource($this->whenLoaded("owner")),
            "company_member" => new CompanyMemberResource($this->company_member)
        ];
    }
}
