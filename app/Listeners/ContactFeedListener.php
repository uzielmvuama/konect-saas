<?php

namespace App\Listeners;

use App\Events\ContactFeedEvent;
use App\Notifications\ContactFeedNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class ContactFeedListener
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(ContactFeedEvent $event): void
    {
        $contactFeed= $event->contactFeed;
        $user= $contactFeed->target;
        $user->notify(new ContactFeedNotification($contactFeed));
    }
}
