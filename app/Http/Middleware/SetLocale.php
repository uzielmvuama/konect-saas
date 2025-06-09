<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

class SetLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {

        // Si la langue est déjà définie en session, on l'utilise
        if (Session::has('locale')) {
            App::setLocale(Session::get('locale'));
        } else {
            // Sinon, on essaie de la détecter automatiquement
            $browserLocale = $request->getPreferredLanguage(config('app.allowed_locales'));
            App::setLocale($browserLocale);
            Session::put('locale', $browserLocale);
        }

        return $next($request);
    }
}
