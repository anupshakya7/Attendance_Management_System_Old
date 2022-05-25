<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::group(['middleware' => ['auth:sanctum']], function () {

    Route::post('logout', [App\Http\Controllers\LoginController::class, 'userlogout']);

});
Route::post('register', [App\Http\Controllers\Registercontroller::class, 'createuser']);
// Route::post('login', 'LoginController@userlogin');
Route::post('login', [App\Http\Controllers\LoginController::class, 'userlogin']);
