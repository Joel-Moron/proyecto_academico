<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
/*     public function register(Request $request)
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
    } */



    public function register(Request $request)
    {
        try {
            $request->validate([
                'nombre' => 'required|string|max:255',
                'email' => 'required',
                'password' => 'required|string|min:6',
                'app' => 'required|string',
                'apm' => 'required|string',
                'dni' => 'required|max:8|min:8',
            ]);

            $user = User::create([
                'user_name' => $request->nombre,
                'user_email' => $request->email,
                'user_password' => Hash::make($request->password),
                'user_dni' => $request->dni,
                'user_app' => $request->app,
                'user_apm' => $request->apm
            ],[]);
            return response()->json(['data' => 'usuario creado correctamente', 'user' => $user], 201);
        }catch (ValidationException $e){
            return response()->json($e->errors(), 400);
        }
        catch (\Exception $e) {
            return response()->json(['error' => 'Error al crear el usuario',$e], 500);
        }
    }
    
    

/*     public function login(Request $request)
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
    } */

    public function login(Request $request)
    {
        
        try {
            $request->validate([
                'email' =>'required',
                'password' => 'required'
            ]);
            
            $user = User::where('user_email', $request->email)->first();

            if ($user && Hash::check($request->password, $user->user_password)) {

                $date = date('Y-m-d H:i:s');
                $dateDiff = strtotime($date) - strtotime($user->date_token);
                //$meses = floor($dateDiff / (30 * 24 * 60 * 60));
                $semanas = floor($dateDiff / (7 * 24 * 60 * 60));

                if ($semanas > 1 || $user->date_token == null) {
                    $token = bin2hex(openssl_random_pseudo_bytes(16,$val));
                    $user -> update(['user_token' => $token, 'date_token' => $date]);
                }
                //excluir contraseña
                unset($user['user_password']);

                return response()->json(['data' => $user] , 200);
            }else{
                return response()->json(['message' => 'Credenciales incorrectas',$user,$request], 401);
            }
        }catch (ValidationException $e){
            return response()->json($e->errors(), 400);
        } catch (\Exception $e) {
            return response()->json($e , 500);
        }
        

        
    }


    }
