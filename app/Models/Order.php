<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        "payment_method",
        "provider_order_id",
        "status",
    ];

    protected static function booted ()
    {
        static::creating(function ($user) {
            $user->uuid = Str::uuid()->toString();
        });
    }
    public function gadget()
    {
        return $this->hasOne(KoGadget::class, 'order_id', 'id');
    }

    public function author()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
