<?php
// app/Http/Requests/UploadActivityImagesRequest.php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\File;

class UploadActivityImagesRequest extends FormRequest
{
    public function authorize(): bool { return auth()->check(); }

    public function rules(): array
    {
        return [
            'files'   => ['required','array','max:10'],
            'files.*' => [File::image()->types(['jpg','jpeg','png','webp'])->max(4 * 1024)],
        ];
    }
}
