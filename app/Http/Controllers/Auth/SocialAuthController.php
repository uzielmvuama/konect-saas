<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;

class SocialAuthController extends Controller
{
    public function redirect($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback($provider)
    {
        $socialUser = Socialite::driver($provider)->stateless()->user();

        $user = User::updateOrCreate(
            ['email' => $socialUser->getEmail()],
            [
                'name' => explode(" ",$socialUser->getName() ?? $socialUser->getNickname())[1],
                'firstname' => explode(" ",$socialUser->getName() ?? $socialUser->getNickname())[0],
                'provider_id' => $socialUser->getId(),
                'provider_name' => $provider,
                // Formal
                'password' => Hash::make(Str::random(24)), // mot de passe inutilisé, mais requis
            ]
        );

        Auth::login($user, true);

        return redirect()->intended(route("dashboard"));
    }
}
