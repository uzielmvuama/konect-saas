<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactFeed extends Model
{
    use HasFactory, HasUuids;

    // Déclare la clé primaire comme étant de type UUID
    protected $keyType = 'string';

    protected $with = ['target'];

    // Empêche l'incrémentation automatique
    public $incrementing = false;

    protected $fillable = [
        "feed_info",
        "user_id",
        "konect_id"
    ];

    public function target()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
