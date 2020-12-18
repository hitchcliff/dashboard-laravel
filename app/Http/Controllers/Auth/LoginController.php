<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index()
    {
        return ['message' => "hello from login"];
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'username' => 'required|max:255',
            'password' => 'required|max:255',
        ]);

        if (!Auth::attempt($request->only('username', 'password'))) {
            return [
                "message" => "Invalid credentials",
                "status" => 401,
            ];
        };

        return [
            "user" => $request->only('username'),
            "message" => "Good good, successfully login!",
        ];
    }
}
