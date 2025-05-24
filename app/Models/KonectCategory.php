<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KonectCategory extends Model
{
    use HasFactory;

    protected $fillable= [
        'kc_label'
    ];
    public function konects(){
        return $this->hasMany(Konect::class);
    }
}
