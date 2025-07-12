<?php

namespace App\Http\Requests\Profile;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileUrlsInfoRequest extends FormRequest
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
            'emails' => ['nullable', 'array'],
            'emails.*.type' => ['required', 'string'],
            'emails.*.text' => ['required', 'email'],

            'socialProfils' => ['nullable', 'array'],
            'socialProfils.facebook.uri' => ['nullable', 'url'],
            'socialProfils.facebook.type' => ['nullable', 'string'],

            'socialProfils.instagram.uri' => ['nullable', 'url'],
            'socialProfils.instagram.type' => ['nullable', 'string'],

            'socialProfils.twitter.uri' => ['nullable', 'url'],
            'socialProfils.twitter.type' => ['nullable', 'string'],

            'socialProfils.youtube.uri' => ['nullable', 'url'],
            'socialProfils.youtube.type' => ['nullable', 'string'],

            'socialProfils.tiktok.uri' => ['nullable', 'url'],
            'socialProfils.tiktok.type' => ['nullable', 'string'],

            'socialProfils.linkedin.uri' => ['nullable', 'url'],
            'socialProfils.linkedin.type' => ['nullable', 'string'],

            'socialProfils.pinterest.uri' => ['nullable', 'url'],
            'socialProfils.pinterest.type' => ['nullable', 'string'],

            'urls' => ['nullable', 'array'],
            'urls.*.type' => ['required', 'string'],
            'urls.*.uri' => ['required', 'url'],
        ];
    }
}
