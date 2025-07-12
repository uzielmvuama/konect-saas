<?php
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::prefix('/settings')->group(function () {
    Route::name('settings')->group(function () {
        Route::get('/', [\App\Http\Controllers\UserController::class, 'showLoggedUser']);

        Route::prefix('/vcard')->group(function () {
           Route::name('vcard')->group(function () {
               Route::patch('/general-info', [\App\Http\Controllers\UserController::class, 'updateVcardGeneralInfo'])->name('.general-info');
               Route::patch('/urls-info', [\App\Http\Controllers\UserController::class, 'updateUrlslInfo'])->name
               ('.urls-info');
               Route::patch('/images-update', [\App\Http\Controllers\UserController::class, 'updateVcardImages'])->name('.images-update');
           });
        });

    });


});
