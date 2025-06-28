<?php

namespace App\Http\Requests\Profile;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileImagesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'profile_picture' => [
                'nullable',            // pas obligatoire
                'image',               // doit être une image (jpeg, png, gif, webp, etc.)
                'mimes:jpeg,png,jpg,webp',
                'max:2048'             // max 2 Mo (2048 Ko)
            ],
            'background_image' => [
                'nullable',
                'image',
                'mimes:jpeg,png,jpg,webp',
                'max:4096'             // max 4 Mo
            ],
        ];
    }
}
