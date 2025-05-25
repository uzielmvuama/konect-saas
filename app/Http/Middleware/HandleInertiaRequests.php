<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\File;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            'locale' => App::getLocale(),
            'translations' => $this->loadAllTranslations(App::getLocale()),
            'app_email'=> config('mail.from.address'),
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'errors' => fn () => $request->session()->get('errors')
            ],
            ...parent::share($request),
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }

    private function loadAllTranslations($locale)
    {
        $translations = [];

        // Charger les fichiers JSON (ex: lang/fr.json)
        $jsonPath = base_path("lang/{$locale}.json");
        if (File::exists($jsonPath)) {
            $translations = json_decode(File::get($jsonPath), true) ?? [];
        }

        // Charger les fichiers PHP (ex: lang/fr/*.php)
        $phpPath = base_path("lang/{$locale}/");
        if (File::isDirectory($phpPath)) {
            foreach (File::files($phpPath) as $file) {
                $key = pathinfo($file, PATHINFO_FILENAME);
                $translations[$key] = require $file;
            }
        }

        return $translations;
    }
}
