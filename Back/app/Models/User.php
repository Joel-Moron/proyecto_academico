<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'user';
    protected $fillable = [
        'user_name',
        'user_email',
        'user_password',
        'user_app',
        'user_apm',
        'token',
        'date_token'
    ];
}
