<?php

namespace App\Helpers\Services;

use App\Helpers\Core\Constants;
use App\Helpers\Core\Utils;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\Response;

class UploadService
{
    public function uploadFile(UploadedFile|string|null $file, string $rootPath)
    {
        $disk = 'sftp';
        if (!is_string($file) and !is_null($file)) {
            if (Storage::disk($disk)->exists($rootPath) === false) {
                Storage::disk($disk)->makeDirectory($rootPath);
            }
            $rs = false;
            $filename =  uniqid() . '.' . $file->getClientOriginalExtension();

            if ($file->storeAs($rootPath . DIRECTORY_SEPARATOR, $filename, $disk)) {
                $rs =  Utils::json_res(true, "File successfully updated", $filename, Constants::CREATED_STATUS_CODE);
            } else {
                $rs =  Utils::json_res(false, "Problem during upload proccess", null, Response::HTTP_BAD_REQUEST);
            }
            return $rs;
        }
    }
}
