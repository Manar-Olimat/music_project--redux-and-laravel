<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\Api\AuthController;

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

Route::post('/auth/register', [AuthController::class, 'createUser']);
Route::post('/auth/login', [AuthController::class, 'loginUser']);
Route::apiResource('posts', PostController::class)->middleware('auth:sanctum');



Route::get('/reviews', [ReviewController::class, 'index']);

#################
// USERS

// show all users

Route::get('/users', [UserController::class, 'index']);

// show current user

Route::get('/profile/{id}', [UserController::class, 'show']);

Route::get('/posts', [PostController::class, 'index']);
Route::get('/comments/{id}', [CommentController::class, 'index']);
Route::post('/create_post', [PostController::class, 'store']);
Route::post('/create_comment', [CommentController::class, 'store']);
Route::delete('/delete_Post/{id}', [PostController::class, 'destroy']);
Route::delete('/delete_comment/{id}', [CommentController::class, 'destroy']);

// update user
Route::put('/profile/update/{id}', [UserController::class, 'update']);