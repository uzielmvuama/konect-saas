<?php

use App\Helpers\Services\UserService;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;


Route::get('/lang/{locale}', function ($locale) {
    if (in_array($locale, config('app.allowed_locales'))) {
        Session::put('locale', $locale);
        return true;
    }
    return false;
});

Route::middleware('guest')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    });

    require_once "includes/socialite.php";
});


Route::get('/kuser/{uuid}', function (\App\Models\User $user) {
    $media= $user->getMedia(VCARD_ROOT_PATH);

    if (empty($media)) {
        $service= new UserService();
        $service->vcardGenerate($user);
    }

    return Inertia::render('Kuser', [
        'user' => $user->load('konects.user')->toResource(),
        'vcard_path' => $user->getFirstMedia(VCARD_ROOT_PATH)->getPath(),
        'cover_path' => $user->getFirstMedia(COVER_IMG_ROOT_PATH)?->getPath(),
        'avatar_path' => $user->getFirstMedia(PROFILE_IMG_ROOT_PATH)?->getPath()
    ]);
});

Route::get('/plans', function () {

    return Inertia::render('Plans',
    [
        'plans' => \App\Models\Plan::all()
    ]);
});

Route::prefix("/product")->group(function (){
    Route::get('/list', function () {
        return Inertia::render('Products');
    });
    Route::get('/{uuid}', function () {
        return Inertia::render('ProductDetails');
    });
});


Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Profile/Dashboard');
    })->name('dashboard');

    require_once "includes/user-settings.php";

    Route::get('/connections', function () {
        return Inertia::render('Profile/Connections',
            [
                'user'=> \Illuminate\Support\Facades\Auth::user()->load('konects.user')->toResource(),
            ]);
    })->name('connections');

    Route::prefix("/team_user")->group(function (){
       Route::name('team_user.')->group(function (){
           Route::get('/create', [\App\Http\Controllers\TeamsController::class, 'create'])->name('create');
           Route::post('/create', [\App\Http\Controllers\TeamsController::class, 'doCreate'])->name('store');
       });
    });
    require_once "includes/checkout.php";
    require_once "includes/media.php";
});


require __DIR__ . '/public.php';
