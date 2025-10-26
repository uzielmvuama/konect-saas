<?php

namespace App\Notifications;

use App\Mail\ContactFeedMail;
use App\Models\ContactFeed;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ContactFeedNotification extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(public ContactFeed $contactFeed)
    {
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): Mailable
    {
        return (new ContactFeedMail($this->contactFeed))->to($notifiable->email);
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }

    // Pour loguer la cause quand ça échoue
    public function failed(\Throwable $e): void
    {
        \Log::error('ContactFeedNotification failed', [
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString(),
            'data'  => $this->data,
        ]);
    }
}
