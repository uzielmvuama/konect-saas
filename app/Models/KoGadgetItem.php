<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KoGadgetItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'kg_name',
        'kg_code',
        'kg_details'
    ];
    public function ko_gadget()
    {
        return $this->hasMany(KoGadget::class);
    }

    /**
     * Get the route key for the model.
     */
    public function getRouteKeyName(): string
    {
        return 'kg_code';
    }
}
