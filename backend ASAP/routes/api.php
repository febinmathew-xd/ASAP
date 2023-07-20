<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UtilController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\StudentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// UtilController

Route::post('save', [UtilController::class, 'save']);
Route::post('saveuser', [UtilController::class, 'saveuser']);
Route::post('update', [UtilController::class, 'update']);
Route::post('getall', [UtilController::class, 'getAll']);
Route::post('getbyid', [UtilController::class, 'getById']);
Route::post('getbydata', [UtilController::class, 'getByData']);
Route::post('delete', [UtilController::class, 'delete']);
Route::post('deleteuser', [UtilController::class, 'deleteUser']);
Route::post('getuserbyid', [UtilController::class, 'getUserById']);
Route::post('updateuser', [UtilController::class, 'updateUser']);
Route::post('login', [UtilController::class, 'Login']);
Route::post('fileupload', [UtilController::class, 'fileupload']);





//TeacherController

Route::post('getteachers', [TeacherController::class, 'getTeacherData']);
Route::post('teacherviewstudents', [TeacherController::class, 'getStudentsByTeacherCourse']);
Route::post('gettutorialsforteachers', [TeacherController::class, 'getTutorialsForTeachers']);
Route::get('gettimetable', [TeacherController::class, 'getTimetable']);
Route::get('getallexams', [TeacherController::class, 'getAllExams']);
Route::get('getallpracticalsession', [TeacherController::class, 'getAllPracticalSessions']);
Route::post('getstudentsresults', [TeacherController::class, 'getStudentResults']);

//StudentController

Route::post('getstudents', [StudentController::class, 'getStudentData']);
Route::post('coursepayment', [StudentController::class, 'coursePayment']);
Route::get('getpayments', [StudentController::class, 'getPayments']);
Route::post('getexamdetails', [StudentController::class, 'getExamDetails']);
Route::post('getexamresults', [StudentController::class, 'getExamResults']);
Route::post('getMessagesByUserId', [StudentController::class, 'getMessagesByUserId']);