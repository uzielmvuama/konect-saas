<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Helpers\Traits\Pointable\Pointable;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;
use Laravel\Cashier\Billable;
use Laravel\Cashier\Subscription;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Jetstream\HasTeams;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\File;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class User extends Authenticatable implements HasMedia
{
    use HasApiTokens, Billable, Pointable;

    /** @use HasFactory<UserFactory> */
    use HasFactory;
    use HasProfilePhoto;
    use HasTeams;
    use Notifiable;
    use TwoFactorAuthenticatable;
    use InteractsWithMedia;

    protected $with = ['konects'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'firstname',
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'profile_photo_url',
    ];

    protected static function booted()
    {
        static::creating(function ($user) {
            $user->uuid = Str::uuid()->toString();
        });
    }

    public function konects()
    {
        return $this->hasMany(Konect::class)->orderBy('id', 'DESC');
    }

    public function konect_categories()
    {
        return $this->hasMany(KonectCategory::class);
    }

    public function companies()
    {
        return $this->hasMany(Company::class);
    }

    public function gadgets()
    {
        return $this->hasMany(KoGadget::class, "user_id", "id")->orderBy('id', 'DESC');
    }

    function contact_feeds()
    {
        return $this->hasMany(ContactFeed::class)->orderBy('created_at', 'DESC');
    }

    public function hasPaidOneTime()
    {
        return $this->payments()->where('type', 'onetime')->exists();
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function currentSubscriptionName(): ?string
    {
        return $this->currentPlan()->name ?? 'starter'; // Retourne juste le nom
    }

    public function currentPlan(): ?Plan
    {
        $type = $this->currentSubscription()?->stripe_price;
        return $type
            ? Plan::where('stripe_price_id', $type)->first()
            : null;
    }

    public function currentSubscription(): ?Subscription
    {
        return $this->subscriptions()
            ->whereNull('ends_at')          // encore actif (non annulé)
            ->orderByDesc('created_at')     // le plus récent si plusieurs
            ->first();                      // retourne l'objet Subscription
    }

    public function nextUpgrade(): ?Plan
    {
        return $this->availableUpgrades()->first();
    }

    public function availableUpgrades()
    {
        $current = $this->currentPlan();

        if (!$current) {
            return Plan::orderBy('id')->get(); // Pas d’abonnement → tous les plans disponibles
        }

        return Plan::where('id', '>', $current->id)
            ->orderBy('id')
            ->get();
    }

    public function getProfilePhotoUrlAttribute()
    {
        return $this->profile_photo_path
            ? Storage::disk($this->profilePhotoDisk())->url($this->profile_photo_path)
            : $this->defaultProfilePhotoUrl();
    }

    protected function defaultProfilePhotoUrl()
    {
        $name = trim(collect(explode(' ', $this->name))->map(function ($segment) {
            return mb_substr($segment, 0, 1);
        })->join(' '));
        $firstname = trim(collect(explode(' ', $this->firstname))->map(function ($segment) {
            return mb_substr($segment, 0, 1);
        })->join(' '));

        return 'https://ui-avatars.com/api/?name=' . urlencode($firstname . $name) . '&color=7F9CF5&background=EBF4FF';
    }

    final public function registerMediaCollections(): void
    {
        $this->addMediaCollection(PROFILE_IMG_ROOT_PATH)->useDisk('sftp')->singleFile();
        $this->addMediaCollection(COVER_IMG_ROOT_PATH)->useDisk('sftp')->singleFile();
        $this->addMediaCollection(ACTIVITY_IMG_ROOT_PATH)
            ->useDisk('sftp')
            ->onlyKeepLatest(10);

      $this->addMediaCollection(ACTIVITY_VIDEO_ROOT_PATH)
          ->useDisk('sftp') // changer par 's3' plus tard si nécessaire
          ->onlyKeepLatest(3)
          ->acceptsMimeTypes(['video/mp4', 'video/quicktime']);

        $this->addMediaCollection('vcards')
            ->useDisk('sftp')
            ->acceptsMimeTypes(['text/vcard', 'text/x-vcard', 'text/plain'])
            ->singleFile(); // Remplace toujours l'ancienne

    }

    final public function registerMediaConversions(?Media $media = null): void
    {
        $this
            ->addMediaConversion('thumb')->performOnCollections(PROFILE_IMG_ROOT_PATH)
            ->fit(Fit::Contain, 300, 300)
            ->nonQueued();
    }

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
