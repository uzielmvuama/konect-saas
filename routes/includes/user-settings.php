<?php
use Inertia\Inertia;

Route::prefix('/settings')->group(function () {
    Route::name('settings')->group(function () {
        Route::get('/', function () {
            return Inertia::render('Profile/Settings',
                [
                    'user'=> \Illuminate\Support\Facades\Auth::user()->load('konects.user')->toResource(),
                ]);
        });

        Route::prefix('/vcard')->group(function () {
           Route::name('vcard')->group(function () {
               Route::patch('/general-info', [\App\Http\Controllers\UserController::class, 'updateVcardGeneralInfo'])->name('.general-info');
           });
        });

    });


});
