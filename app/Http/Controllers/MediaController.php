<?php
// app/Http/Controllers/MediaController.php
namespace App\Http\Controllers;

use App\Http\Requests\UploadActivityImagesRequest;
use App\Http\Requests\UploadActivityVideosRequest;
use App\Http\Requests\UploadCoverRequest;
use App\Http\Requests\UploadProfileRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Throwable;

class MediaController extends Controller
{
    /** Réponse unifiée (JSON si requête AJAX, sinon redirect back). */
    private function respond(Request $request, array $data = [], int $status = 200)
    {
        if ($request->expectsJson()) {
            return response()->json($data, $status);
        }
        return back(303)->with($data);
    }

    /** Ajout « safe » (évite null / invalide). */
    private function addMediaFromRequestSafe(User $user, string $field, string $collection): ?Media
    {
        $file = request()->file($field);
        if (!$file || !$file->isValid()) {
            return null;
        }
        return $user->addMedia($file)->toMediaCollection($collection);
    }

    /** Ajout multiple « safe ». Retourne la liste des Media créés. */
    private function addManyFromRequestSafe(User $user, string $field, string $collection, int $maxKeep = PHP_INT_MAX): array
    {
        $files = request()->file($field, []);
        $created = [];

        foreach ($files as $file) {
            if ($file && $file->isValid()) {
                $created[] = $user->addMedia($file)->toMediaCollection($collection);
            }
        }

        // Limite simple côté serveur (soft cap)
        if ($maxKeep !== PHP_INT_MAX) {
            $existing = $user->getMedia($collection)->sortByDesc('id');
            if ($existing->count() > $maxKeep) {
                $toDelete = $existing->slice($maxKeep);
                $toDelete->each->delete();
            }
        }

        return $created;
    }

    /** PROFILE (image carrée) */
    public function uploadProfile(UploadProfileRequest $request)
    {
        $user = $request->user();

        // singleFile => remplace l’ancienne
        try {
            $media = $this->addMediaFromRequestSafe($user, 'profile', PROFILE_IMG_ROOT_PATH);
        } catch (Throwable $e) {
            report($e);
            return $this->respond($request, ['error' => 'Upload failed.'], 422);
        }

        if (!$media) {
            return $this->respond($request, ['error' => 'No valid file received.'], 422);
        }

        return $this->respond($request, [
            'success'   => 'Profile image updated.',
            'media_id'  => $media->id,
            'url'       => $media->getUrl('thumb') ?: $media->getUrl(),
        ]);
    }

    /** COVER (image) */
    public function uploadCover(UploadCoverRequest $request)
    {
        $user = $request->user();

        try {
            $media = $this->addMediaFromRequestSafe($user, 'file', COVER_IMG_ROOT_PATH);
        } catch (Throwable $e) {
            report($e);
            return $this->respond($request, ['error' => 'Upload failed.'], 422);
        }

        if (!$media) {
            return $this->respond($request, ['error' => 'No valid file received.'], 422);
        }

        return $this->respond($request, [
            'success'  => 'Cover updated.',
            'media_id' => $media->id,
            'url'      => $media->getUrl('large') ?: $media->getUrl(),
        ]);
    }

    /** ACTIVITY: IMAGES (≤ 10) */
    public function uploadActivityImages(UploadActivityImagesRequest $request)
    {
        $user = $request->user();

        // hard cap côté app : refuse si dépassement
        $current = $user->getMedia('activity_images')->count();
        $incoming = count($request->file('files', []));
        if ($current + $incoming > 10) {
            return $this->respond($request, ['error' => 'Maximum 10 images allowed.'], 422);
        }

        try {
            $created = $this->addManyFromRequestSafe($user, 'files', ACTIVITY_IMG_ROOT_PATH, 10);
        } catch (Throwable $e) {
            report($e);
            return $this->respond($request, ['error' => 'Upload failed.'], 422);
        }

        return $this->respond($request, [
            'success' => 'Images uploaded.',
            'count'   => count($created),
            'items'   => collect($created)->map(fn(Media $m) => [
                'id'    => $m->id,
                'name'  => $m->name,
                'url'   => $m->getUrl(),
                'thumb' => $m->getUrl('thumb'),
                'size'  => $m->human_readable_size,
            ])->values(),
        ]);
    }

    /** ACTIVITY: VIDEOS (≤ 3) */
    public function uploadActivityVideos(UploadActivityVideosRequest $request)
    {
        $user = $request->user();

        $current = $user->getMedia('activity_videos')->count();
        $incoming = count($request->file('files', []));
        if ($current + $incoming > 3) {
            return $this->respond($request, ['error' => 'Maximum 3 videos allowed.'], 422);
        }

        try {
            $created = $this->addManyFromRequestSafe($user, 'files', ACTIVITY_VIDEO_ROOT_PATH, 3);
        } catch (Throwable $e) {
            report($e);
            return $this->respond($request, ['error' => 'Upload failed.'], 422);
        }

        return $this->respond($request, [
            'success' => 'Videos uploaded.',
            'count'   => count($created),
            'items'   => collect($created)->map(fn(Media $m) => [
                'id'   => $m->id,
                'name' => $m->name,
                'url'  => $m->getUrl(), // pour S3 => getTemporaryUrl()
            ])->values(),
        ]);
    }

    /** Suppression d’un média (optionnelle) */
    public function destroy(Media $media, Request $request)
    {
        // Optionnel: Policy pour autoriser uniquement le propriétaire
        abort_unless($request->user() && $media->model_type === User::class && $media->model_id === $request->user()->id, 403);

        $media->delete();
        return $this->respond($request, ['success' => 'Media removed.']);
    }
}
