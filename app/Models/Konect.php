<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Konect extends Model
{
    use HasFactory;


    protected $fillable = [
        "ko_ip_konect",
        "ko_ip_locations",
        "ko_social_clicked",
        "ko_phone_clicked",
        "user_id",
        "konect_category_id"
    ];

    protected static function boot()
    {
        parent::boot();

        // Générer automatiquement un UUID lors de la création d'un nouvel enregistrement
        static::creating(function ($model) {
            if (empty($model->uuid)) {
                $model->uuid = Str::uuid();
            }
        });
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
