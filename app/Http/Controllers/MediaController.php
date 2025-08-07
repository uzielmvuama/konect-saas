<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MediaController extends Controller
{
    public function uploadProfile(Request $request)
    {
        dd();
        $request->validate(['file' => 'required|image|max:2048']);
        auth()->user()->addMediaFromRequest('file')->toMediaCollection(PROFILE_IMG_ROOT_PATH);
        return back(303);
    }

    public function uploadCover(Request $request)
    {
        $request->validate(['file' => 'required|image|max:2048']);
        auth()->user()->addMediaFromRequest('file')->toMediaCollection(COVER_IMG_ROOT_PATH);
        return back(303);
    }

    public function uploadActivityImages(Request $request)
    {
        $request->validate([
            'files'   => 'required|array|max:10',
            'files.*' => 'image|max:2048',
        ]);

        $user = auth()->user();
        if (($user->getMedia(ACTIVITY_IMG_ROOT_PATH)->count() + count($request->file('files'))) > 10) {
            return back()->withErrors(['files' => 'Maximum 10 images autorisées.']);
        }

        foreach ($request->file('files') as $file) {
            $user->addMedia($file)->toMediaCollection(ACTIVITY_IMG_ROOT_PATH);
        }

        return back(303);
    }

    public function uploadActivityVideos(Request $request)
    {
        $request->validate([
            'files'   => 'required|array|max:3',
            'files.*' => 'mimes:mp4,quicktime|max:10240', // max 10 Mo
        ]);

        $user = auth()->user();
        if (($user->getMedia(ACTIVITY_VIDEO_ROOT_PATH)->count() + count($request->file('files'))) > 3) {
            return back()->withErrors(['files' => 'Maximum 3 vidéos autorisées.']);
        }

        foreach ($request->file('files') as $file) {
            $user->addMedia($file)->toMediaCollection(ACTIVITY_VIDEO_ROOT_PATH);
        }

        return back(303);
    }
}
