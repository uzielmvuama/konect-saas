<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KoGadget extends Model
{
    use HasFactory;

    protected $fillable = [
        'is_active',
        'custom_details'
    ];
    protected $with = ['order', 'gadget', 'company', 'owner'];


    // public function author()
    // {
    //     return $this->belongsTo(User::class, 'user_id', 'id');
    // }

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function gadget()
    {
        return $this->belongsTo(KoGadgetItem::class, 'ko_gadget_item_id', 'id');
    }

    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
