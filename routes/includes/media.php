<?php
use App\Http\Controllers\MediaController;

Route::prefix('/media')->group(function () {
    Route::post('/profile', [MediaController::class, 'uploadProfile']);
    Route::post('/cover', [MediaController::class, 'uploadCover']);
    Route::post('/activity-images', [MediaController::class, 'uploadActivityImages']);
    Route::post('/activity-videos', [MediaController::class, 'uploadActivityVideos']);
});
