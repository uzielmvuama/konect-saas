<?php

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


Route::get('/kuser/{ko_uuid}', function () {
    return Inertia::render('Kuser');
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

    Route::get('/settings', function () {
        return Inertia::render('Profile/Settings',

        [
            'user'=> \Illuminate\Support\Facades\Auth::user()->load('konects.user')->toResource(),
        ]);
    })->name('settings');

    Route::prefix("/teams")->group(function (){
       Route::name('teams.')->group(function (){
           Route::get('/create', [\App\Http\Controllers\TeamsController::class, 'create'])->name('create');
           Route::post('/create', [\App\Http\Controllers\TeamsController::class, 'doCreate'])->name('create');
       });
    });
    require_once "includes/checkout.php";
});


require __DIR__ . '/public.php';
