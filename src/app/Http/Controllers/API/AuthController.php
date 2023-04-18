<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $req)
    {
        $user = User::create([
            'name' => $req->name,
            'email' => $req->email,
            'password' => Hash::make($req->password)
        ]);

        $token = $user->createToken($user->email . '_Token')->plainTextToken;
        return response()->json([
            'status' => 200,
            'username' => $user->name,
            'token' => $token,
            'message' => '登録完了しました',
        ]);
    }
}
