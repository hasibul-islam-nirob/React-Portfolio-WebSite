<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\AdminLoginModel;

class AdminLoginController extends Controller
{
    function adminLogin(){
        return view('login');
    }

    function onLogin(Request $request){
        $username = $request->username;
        $password = $request->password;
        $count = AdminLoginModel::where('username',$username)->where('password',$password)->count();
        if ($count == 1){
            $request->session()->put('usernameKey',$username);
            return "1";
        }else{
            return "0";
        }
    }

    function onLogOut(Request $request){
        $request->session()->flash('usernameKey');
        return redirect('/login');
    }

}
