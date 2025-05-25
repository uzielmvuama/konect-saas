<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Industry extends Model
{
    use SoftDeletes;

    protected $fillable = ['name'];

    public function teams()
    {
        return $this->hasMany(Team::class); // Si une team appartient à une industry
    }
}
