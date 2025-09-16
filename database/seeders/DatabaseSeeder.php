<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash; // <-- Pastikan ini di-import

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Membuat satu user admin secara spesifik
        User::firstOrCreate(
            ['email' => 'admin@mail.com'], // Cari user dengan email ini
            [
                'name' => 'Admin',
                'password' => Hash::make('password'), // Ganti 'password' dengan yang lebih aman
                'email_verified_at' => now(),
            ]
        );
    }
}
