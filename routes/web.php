<?php

use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Route;

// find users in a role
Route::get('/r/{id}', function ($id) {
    $role = Role::find($id)->users;
    return $role;
});

// retrieve role of a single user
Route::get('/u/{id}', function ($id) {
    $user = User::find($id)->role;
    return $user;
});

// delete a role of a single user
// Route::get('/u/delete/{id}', function() {
//    $ 
// });

Route::get('/test', function () {
    $user = Role::with('users')->get();
    return $user;
});
