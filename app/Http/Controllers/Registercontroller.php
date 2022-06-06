<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
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
            'first_name' => $req->first_name,
            'last_name' => $req->last_name,
            'email' => $req->email,
            'password' => $password,
            'is_staff' => $req->is_staff,
            'is_active' => $req->is_active,
            'is_superuser' => $req->is_superuser,
            'last_login' => Carbon::now(),
            'date_joined' => Carbon::now(),
        ]);
        // }
        // else{
        //     return response([
        //         'message' => 'Only Admin Of the system can create new user'
        //     ]);
        // }
    }
}
