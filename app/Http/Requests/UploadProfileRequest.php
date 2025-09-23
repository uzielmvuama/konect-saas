<?php
// app/Http/Requests/UploadProfileRequest.php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\File;
use Illuminate\Validation\Rule;

class UploadProfileRequest extends FormRequest
{
    public function authorize(): bool { return auth()->check(); }

    public function rules(): array
    {
        return [
            'profile' => [
                'required',
                File::image()
                    ->types(['jpg','jpeg','png','webp'])
                    ->min(1)          // ≥ 100 Ko (mets 1024 pour 1 Mo si tu veux)
                    ->max(12 * 1024),   // ≤ 12 Mo
                Rule::dimensions()
                    ->ratio(1)          // carré
                    ->maxWidth(1024)
                    ->maxHeight(1024),
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'profile.required'   => 'Veuillez fournir une image.',
            'profile.image'      => 'Le fichier doit être une image.',
            'profile.min'        => "L'image est trop légère.",
            'profile.max'        => "L'image ne doit pas dépasser 12 Mo.",
            'profile.dimensions' => "L'image doit être carrée et ≤ 1024×1024.",
        ];
    }
}
