<?php

namespace App\Http\Resources;

use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CompanyMemberResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
                    "created_at"=> $this->created_at,
                    "company_email"=> $this->company_email,
                    "uuid"=> $this->uuid,
                    "role"=> $this->role,
                    "phone_ext"=> $this->phone_ext,
                    "active"=> $this->active,
                    "request_status"=> $this->request_status,
                    "company"=> new CompanyResource($this->whenLoaded('company')),
                    "user"=> new UserResource($this->whenLoaded('user')),
        ];
    }
}
