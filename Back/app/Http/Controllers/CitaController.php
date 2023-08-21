<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cita;

class CitaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function apartarCita(Request $request, string $id)
    {
        try {
            $request->validate([
                'fecha' => 'required|string',
                'hora' => 'required|string',
            ]); 

            $cita = Cita::create([
                'cita_fecha' => $request->fecha,
                'cita_hora' => $request->hora,
                'user_id' => $id,
            ]);

            return response()->json(['message' => 'Appointment reserved successfully', 'appointment' => $cita], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred while reserving the appointment', 'error' => $e->getMessage()], 500);
        }
    }

}
