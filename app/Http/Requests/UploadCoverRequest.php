<?php
// app/Http/Requests/UploadCoverRequest.php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\File;

class UploadCoverRequest extends FormRequest
{
    public function authorize(): bool { return auth()->check(); }

    public function rules(): array
    {
        return [
            'file' => [
                'required',
                File::image()->types(['jpg','jpeg','png','webp'])->max(4 * 1024), // 4 Mo
            ],
        ];
    }
}
