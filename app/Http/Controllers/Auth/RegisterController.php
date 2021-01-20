<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public function index()
    {
        return ['message' => 'hello from register'];
    }

    public function store(Request $request)
    {
        $validator = $this->validateRequest();
        if ($validator->fails()) {
            return $this->apiResponse(null, "Please check the fields.", 422);
        }

        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        if (Auth::attempt($request->only('username', 'password'))) {
            return $this->apiResponse($user, 'Good good, user created.', 201);
        };
    }

    public function validateRequest()
    {
        return Validator::make(request()->all(), [
            'name' => 'required|max:255',
            'username' => 'required|max:255',
            'email' => 'required|email|max:255',
            'password' => 'required|confirmed|max:255',
        ]);
    }

    public function apiResponse($data, $message = null, $status = 200)
    {
        return [
            "data" => $data,
            "message" => $message,
            "status" => $status,
        ];
    }
}
