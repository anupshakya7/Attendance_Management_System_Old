<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    //for login
    public function userlogin(Request $request)
    {
        // Check validation
        // $this->validate($request, [
        //     'mobile_no' => 'required|regex:/[0-9]{10}/|digits:10',
        // ]);

        // Get user record
        // dd($request->all());
        $user = User::where('username', $request->username)->first();
        // dd($user);
        // Check Condition Mobile No. Found or Not
        if ($request->get('username') != $user->username) {
            // \Session::put('errors', 'username does not match in our system..!!');
            return response([
                'message' => ['Username is invalid'],
            ]);
        }
        // return $user->password;
        $pass = $request->get('password');
        $salt = "abcde";
        $sha1 = sha1($salt . $pass);
        $password = 'sha1$' . $salt . '$' . $sha1;
        // return $password;
        if ($password != $user->password) {
            // \Session::put('errors', 'Your password doesnot match..!!');
            return response([
                'message' => ['password did not match'],
            ]);
        }
        $token = $user->createToken($user->username)->plainTextToken;

        // Set Auth Details
        // dd($user);
        Auth::login($user);

        // Redirect home page
        $response = [
            'user' => $user,
            'token' => $token,
        ];
        return response($response, 200);
    }
    public function userlogout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response([
            'message' => ['User Session Expired'],
        ]);
    }
}
