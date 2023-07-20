<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TeacherController extends Controller
{
    //
    public function getTeacherData()
    {
        $result = DB::table('teacher')->select('*', 'teacher.id as teacherid')->join('courses', 'courses.id', '=', 'teacher.courseid')->get();
        echo json_encode($result);
    }
    public function getStudentsByTeacherCourse(Request $request)
    {
        $result = DB::table('student')->select('*', 'student.id as studentid')->join('courses', 'courses.id', '=', 'student.courseid')->where('courseid', $request->courseid)->get();
        echo json_encode($result);
    }

    public function getTimetable()
    {
        $result = DB::table('timetable')->select('*', 'timetable.id as timetableid')->join('courses', 'courses.id', '=', 'timetable.courseid')->get();

        echo json_encode($result);
    }

    public function getAllExams()
    {

        $result = DB::table('exams')
            ->select('*', 'exams.title as examtitle', 'exams.id as examid')
            ->join('venue', 'venue.id', '=', 'exams.venueid')->join('courses', 'courses.id', '=', 'exams.courseid')->get();

        echo json_encode($result);

    }
    public function getAllPracticalSessions()
    {

        $result = DB::table('practical_sessions')
            ->select('*', 'practical_sessions.title as practical_sessiontitle', 'practical_sessions.id as practical_sessionid')
            ->join('venue', 'venue.id', '=', 'practical_sessions.venueid')->join('courses', 'courses.id', '=', 'practical_sessions.courseid')->get();

        echo json_encode($result);

    }

    public function getStudentResults(Request $request)
    {
        $result = DB::table('exam_results')
            ->select('*', 'exam_results.id as resultid')
            ->join('student', 'student.loginid', '=', 'exam_results.studentid')
            ->join('exams', 'exams.id', '=', 'exam_results.examid')
            ->where('exam_results.teacherid', $request->id)
            ->get();

        echo json_encode($result);
    }



}