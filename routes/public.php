<?php

use App\Http\Controllers\KonectController;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\App;

Route::post('/add-konect', [KonectController::class, "store"]);

Route::post('/add-feed/{uuid}', action: [KonectController::class, "feed"]);

Route::post('/set-language', function (Request $request) {
    $language = $request->input('language', 'en'); // "en" par défaut si non défini

    // Sauvegarder la langue dans la session et l'appliquer
    Session::put('locale', $language);
    App::setLocale($language);


    // return response()->json(['message' => 'Langue mise à jour', 'locale' => $language]);
});
