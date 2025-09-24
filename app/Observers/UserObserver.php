<?php

namespace App\Observers;

use App\Helpers\Core\Utils;
use App\Models\User;

class UserObserver
{
    /**
     * Handle the User "created" event.
     */
    public function created(User $user): void
    {
        do {
            $code = Utils::generateReferralCode(userId: $user->id);
        } while (User::where('referal_code', $code)->exists());

        $user->referal_code= $code;
        $user->save();

    }

    /**
     * Handle the User "updated" event.
     */
    public function updated(User $user): void
    {


    }

    /**
     * Handle the User "deleted" event.
     */
    public function deleted(User $user): void
    {
        //
    }

    /**
     * Handle the User "restored" event.
     */
    public function restored(User $user): void
    {
        //
    }

    /**
     * Handle the User "force deleted" event.
     */
    public function forceDeleted(User $user): void
    {
        //
    }
}
