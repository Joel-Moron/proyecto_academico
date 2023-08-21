<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {
            $request->validate([
                'nombre' => 'required|string|max:255',
                'email' => 'required',
                'password' => 'required|string|min:6',
                'app' => 'required|string',
                'apm' => 'required|string',
            ]); 
    
            $user = User::create([
                'user_name' => $request->nombre,
                'user_email' => $request->email,
                'user_password' => $request->password,
                'user_app' => $request->app,
                'user_apm' => $request->apm,
            ]);
    
            return response()->json(['message' => 'User registered successfully', 'user' => $user], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred while registering the user', 'error' => $e->getMessage()], 500);
        }
    }
    
    

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $user = User::where('user_email', $request->email)
                    ->where('user_password', $request->password)
                    ->first();

        if (!$user) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $token = 123; // Debes proporcionar el token adecuado aquí

        return response()->json(['user' => $user, 'token' => $token], 200);
    }


    }
