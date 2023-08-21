<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cita extends Model
{
    public $timestamps = false;
    protected $table = 'cita';
    protected $fillable = [
        'cita_fecha',
        'cita_hora',
        'user_id'
    ];
}
