<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::controller(UserController::class)->group(function () {
    Route::post('/users/register', 'register');
    Route::get('/users/all', 'getAll');
    Route::get('/users/getById/{id}', 'getById');
    Route::get('/users/getByName/{name}', 'getByName');
    Route::get('/users/search/{name}', 'searchUser');
    Route::put('/users/validate/{id}', 'validateUser');
});
