<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LogoutController extends Controller
{

    public function store()
    {
        Auth::logout();

        return [
            "message" => "Bye, you are logged out.",
            "status" => 200,
        ];
    }
}
