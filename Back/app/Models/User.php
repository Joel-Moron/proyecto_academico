<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'user';
    protected $fillable = [
        'user_name',
        'user_app',
        'user_apm',
        'user_dni',
        'user_email',
        'user_emailV',
        'user_password',
        'user_token',
        'date_token',
    ];
}
