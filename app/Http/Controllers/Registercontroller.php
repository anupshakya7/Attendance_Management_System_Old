<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class Registercontroller extends Controller
{
    //for register
    protected function createuser(Request $req)
    {
        // if ($this->middleware('auth') && Auth::user()->is_superuser == 1) {
        $data = [];
        $pass = $req->password;
        $salt = "abcde";
        $sha1 = sha1($salt . $pass);
        $password = 'sha1$' . $salt . '$' . $sha1;
        return User::create([
            'username' => $req->username,
            'name' => $req->name,
            'email' => $req->email,
            'password' => $password,
            'is_staff' => 1,
            'is_active' => 1,
            'is_superuser' => 0,
            'last_login' => $req->last_login,
        ]);
        // }
        // else{
        //     return response([
        //         'message' => 'Only Admin Of the system can create new user'
        //     ]);
        // }
    }
}
