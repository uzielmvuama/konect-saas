<?php

use App\Http\Controllers\PaymentController;

Route::prefix("/checkout")->group(function () {
    Route::name("checkout.")->group(function () {
        Route::post('/create', [PaymentController::class, 'create'])->name("create");
        Route::get('/success/{order}', [PaymentController::class, 'success'])->name('success');
        Route::get('/cancel', [PaymentController::class, 'cancel'])->name("cancel");
        Route::prefix("/subscribe")->group(function () {
            Route::name("subscribe")->group(function () {
                Route::get('/{plan}',
                    [PaymentController::class, 'subscriptionCreate'])->name("");
                Route::get('/success/{session_id}', [PaymentController::class, 'subscribeSuccess'])->name('.success');
            });
        });

    });
});
