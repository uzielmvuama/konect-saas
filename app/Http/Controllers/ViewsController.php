<?php

namespace App\Http\Controllers;

use App\Helpers\Classes\Vcard\UserVcard;
use App\Helpers\Classes\Vcard\VcardModel;
use App\Helpers\Services\UserService;
use App\Models\User;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class ViewsController extends Controller
{
    final public function kuser(User $user) : Response{

        $vinfo= new UserVcard($user->vinfo ?? null);
        $avatar_path=  $user->getFirstMedia(PROFILE_IMG_ROOT_PATH)?->getPath();
        $avatar_path_thumb=  $user->getFirstMedia(PROFILE_IMG_ROOT_PATH)?->getPath('thumb');
        $media= $user->getMedia(VCARD_ROOT_PATH);

        if (empty($media)) {
            $service= new UserService();
            $service->vcardGenerate($user);
        }

        $title = ucfirst($user->firstname).' - ' . ($vinfo->title ?? 'Kuser');
        $description = Str::limit(strip_tags(ucfirst($vinfo->note->text ?? '')), 160);

        $imageUrl = SFTP_ROOT_PATH.'/'. ($avatar_path_thumb ?? $avatar_path);

        $meta = [
            'title'       => $title,
            'description' => $description,
            'image'       => $imageUrl,
            'url'         => url()->current(),
            'site_name'   => config('app.name'),
        ];

        return Inertia::render('Kuser', [
            'user' => $user->load('konects.user')->toResource(),
            'vcard_path' => $user->getFirstMedia(VCARD_ROOT_PATH)?->getPath(),
            'cover_path' => $user->getFirstMedia(COVER_IMG_ROOT_PATH)?->getPath(),
            'avatar_path' => $avatar_path,
            'meta' => $meta,
        ])->withViewData([
            'title'        => $title,
            'meta_desc'    => $description,
            'og_title'     => $title,
            'og_desc'      => $description,
            'og_image'     => $imageUrl,
            'og_url'       => url()->current(),
            'og_site_name' => config('app.name'),
        ]);
    }
}
