<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    //

    public function getStudentData()
    {
        $result = DB::table('student')->select('*', 'student.id as studentid')->join('courses', 'courses.id', '=', 'student.courseid')->get();
        echo json_encode($result);
    }


    public function coursePayment(Request $request)
    {
        $studentdata = DB::table('student')
            ->select('*')
            ->join('courses', 'courses.id', '=', 'student.courseid')
            ->where('student.loginid', $request->userid)->first();

        $filename = app('App\Http\Controllers\PdfGeneratorController')->index($studentdata);
        $insert_array = $request->all();
        $insert_array['certificate'] = $filename;
        DB::table('bank')->insert($insert_array);

        echo json_encode('Successful');
    }

    public function getPayments()
    {

        $result = DB::table('bank')
            ->select('*', 'bank.id as bankid')
            ->join('student', 'student.loginid', '=', 'bank.userid')
            ->join('courses', 'courses.id', '=', 'bank.courseid')
            ->get();

        echo json_encode($result);


    }


    public function getExamDetails(Request $request)
    {

        $result = DB::table('exams')
            ->select('*', 'exams.title as examtitle', 'exams.id as examid')
            ->join('venue', 'venue.id', '=', 'exams.venueid')->join('courses', 'courses.id', '=', 'exams.courseid')
            ->where('exams.courseid', $request->courseid)
            ->get();
        echo json_encode($result);

    }
    public function getExamResults(Request $request)
    {

        $result = DB::table('exams')
            ->select('*', 'exams.title as examtitle', 'exams.id as examid')
            ->join('exam_results', 'exams.id', '=', 'exam_results.examid')
            ->where('exam_results.studentid', $request->studentid)
            ->get();
        echo json_encode($result);

    }

    public function getMessagesByUserId(Request $request){
        $result = DB::table('messages')
        ->where('messages.userid', $request->id)
        ->get();


        echo json_encode($result);
    }


    public function getMessagesByStudentId(Request $request){
        $result = DB::table('messages')
        ->select('messages.message','student.username','student.loginid','messages.userid','messages.hostid')
        ->leftJoin('student','student.loginid','messages.userid')
        ->where('messages.userid',$request->id)
        ->orWhere('messages.hostid',$request->id)
        ->orderBy('messages.id')
        ->get();

        echo json_encode($result);
    }

    public function getQueryByStudentId(Request $request){
        $result = DB::table('enquiry')
        ->where('enquiry.studentid', $request->studentid)
        ->orderBy('enquiry.id', 'desc')
        ->get();

        echo json_encode($result);
    }

    public function getAllEnquiry(Request $request){
        $result = DB::table('enquiry')
        ->select('*', 'enquiry.id as enquiryid')
        ->join('student', 'student.loginid', 'enquiry.studentid')
        ->join('login', 'login.id', 'enquiry.studentid')
        ->get();

        echo json_encode($result);
    }

    public function getApplicationByCorpId (Request $request){
        $result = DB::table('applications')
        ->join('vaccancies', 'vaccancies.id', '=', 'applications.vacancyid')
        ->join('student','student.loginid', '=', 'applications.studentid')
        ->where('vaccancies.corporateid', $request->id)
        ->get();

        echo json_encode($result);
    }

}