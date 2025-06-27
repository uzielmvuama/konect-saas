<?php

namespace App\Http\Requests\Profile;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileGeneralInfoRequest extends FormRequest
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
            'prefix'      => ['nullable', 'string', 'max:10'],
            'first_name'   => ['required', 'string', 'max:100'],
            'name'        => ['required', 'string', 'max:100'],
            'middle_name' => ['required', 'string', 'max:100'],
            'bio' => ['required', 'string', 'max:1000'],
            'location'    => ['required', 'string', 'string'],
        ];
    }
    /**

     * Prepare the data for validation.

     */

    protected function prepareForValidation(): void

    {

        $this->merge([
            'prefix'      => strtolower($this->prefix),
            'first_name'   =>  strtolower($this->first_name),
            'name'        =>  strtolower($this->name),
            'middle_name' =>  strtolower($this->middle_name),
            'location'    =>  strtoupper($this->location),
        ]);

    }
}
