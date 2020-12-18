<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class LoginController extends ApiController
{
    public function index()
    {
        return ['message' => "hello from login"];
    }

    public function store(Request $request)
    {
        if (!Auth::attempt($request->only('username', 'password'))) {
            return [
                "data" => null,
                "message" => "Invalid credentials",
                "status" => 401
            ];
        };

        return [
            "data" => $request->only('username'),
            "message" => "Good good, successfully login!",
            "status" => 200
        ];
    }
}
