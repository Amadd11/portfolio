<?php

namespace App\Http\Controllers;

use App\Models\Message; // <-- 1. Import model Message
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        // 2. Validasi input
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|min:10',
        ]);

        // 3. Simpan data yang sudah divalidasi ke database
        Message::create($validated);

        // 4. Redirect kembali dengan pesan sukses
        return Redirect::back()->with('success', 'Pesan Anda telah berhasil terkirim!');
    }
}
