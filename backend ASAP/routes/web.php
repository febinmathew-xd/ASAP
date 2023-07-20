<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use App\Mail\DemoMail;
use App\Http\Controllers\PdfGeneratorController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/certi', function () {
    return view('certificatedemo');
});

Route::get('/dummymail', function () {

    $mailData = [
        'title' => 'Mail from ItSolutionStuff.com',
        'body' => 'This is for testing email using smtp.'
    ];

    Mail::to('aslamm63@gmail.com')->send(new DemoMail($mailData));

    dd("Email is sent successfully.");
});


Route::get('/resume', [PdfGeneratorController::class, 'index']);