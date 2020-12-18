<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends ApiController
{
    public function index()
    {
        return ['message' => 'hello from register'];
    }

    public function store(Request $request)
    {
        $validator = $this->validateRequest();
        if ($validator->fails()) {
            return $this->errorResponse($validator->messages(), 422);
        }

        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // logged in
        if (Auth::attempt($request->only('username', 'password'))) {
            return $this->successResponse($user, 'Good good, user created.', 201);
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
}
