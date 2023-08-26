<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user', function (Blueprint $table) {
            $table->id('id');
            $table->string('user_name');
            $table->string('user_app');
            $table->string('user_apm');
            $table->bigInteger('user_dni');
            $table->string('user_email')->unique();
            $table->timestamp('user_emailV')->nullable();
            $table->string('user_password');
            $table->string('user_token')->nullable();
            $table->date('date_token')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user');
    }
};
