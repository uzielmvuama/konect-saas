<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;
use Laravel\Cashier\Billable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Jetstream\HasTeams;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Billable;

    /** @use HasFactory<UserFactory> */
    use HasFactory;
    use HasProfilePhoto;
    use HasTeams;
    use Notifiable;
    use TwoFactorAuthenticatable;


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

    protected static function booted ()
    {
        static::creating(function ($user) {
            $user->uuid = Str::uuid()->toString();
        });
    }

    public function hasPaidOneTime()
    {
        return $this->payments()->where('type', 'onetime')->exists();
    }

    public function payments()
    {
        return $this->hasMany(Paymentt::class);
    }

    public function currentSubscription(): ?\Laravel\Cashier\Subscription
    {
        return $this->subscriptions()
            ->whereNull('ends_at')          // encore actif (non annulé)
            ->orderByDesc('created_at')     // le plus récent si plusieurs
            ->first();                      // retourne l'objet Subscription
    }

    public function currentSubscriptionName(): ?string
    {
        return $this->subscriptions()
            ->whereNull('ends_at') // Abonnement actif (non annulé)
            ->orderByDesc('created_at') // Prend le plus récent si plusieurs
            ->value('type'); // Retourne juste le nom
    }

    public function currentPlan(): ?Plan
    {
        $type = $this->currentSubscription()?->stripe_price;
        return $type
            ? Plan::where('stripe_price_id', $type)->first()
            : null;
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


    public function nextUpgrade(): ?Plan
    {
        return $this->availableUpgrades()->first();
    }

}
