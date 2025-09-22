<?php
// app/Http/Requests/UploadActivityVideosRequest.php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UploadActivityVideosRequest extends FormRequest
{
    public function authorize(): bool { return auth()->check(); }

    public function rules(): array
    {
        return [
            'files'   => ['required','array','max:3'],
            'files.*' => ['mimes:mp4,quicktime','max:10240'], // 10 Mo
        ];
    }
}
