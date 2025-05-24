<?php

use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

function compressImage(User $user, string $rootPath="compressed-photo")
{

    if ($user->exists()) {

        // $this->vcardGenerate($user);
        $imgPath = storage_path('app' . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR . $user->profile_photo_path);
        $basename = pathinfo($user->profile_photo_path, PATHINFO_BASENAME);
        $destPath = storage_path('app' . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR . $rootPath) . DIRECTORY_SEPARATOR . $basename;

        # Compress Dir Start
        $compress_dir = $rootPath;

        if (Storage::disk('public')->exists($compress_dir) === false) {
            Storage::disk('public')->makeDirectory($compress_dir);
        }
        # Compress Dir End
        $image = Image::make($imgPath);
        $image->resize(200, 200);
        $image->save($destPath);
        //

        return response()->json(json_res(state: true, status: 201, msg: "compressed image created", data: []));
    } else {
        return response()->json(json_res(state: false, status: 201, msg: "user not found", data: []), status: 400);
    }

    // Image::make($image->getRealPath())->resize(150, 150)->save($path);
    // return response()->json(json_res(state: true, status: 201, msg: "konect successfully created", data: []));
}
