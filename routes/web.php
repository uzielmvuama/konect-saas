<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/kuser', function () {
    return Inertia::render('Kuser');
});

Route::get('/plans', function () {
    return Inertia::render('Plans');
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
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
