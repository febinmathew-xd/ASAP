<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UtilController extends Controller
{
    //
 
    public function save(Request $request){
        DB::table($request->tablename)->insert($request->except(['tablename']));
        echo json_encode('successful');
    }
    public function update(Request $request){
        DB::table($request->tablename)->where('id',$request->id)->update($request->except(['tablename','id']));
        echo json_encode('successful');
    }
    public function getAll(Request $request){
        $result = DB::table($request->tablename)->get();
        echo json_encode($result);
    }
    public function getById(Request $request){
        $result = DB::table($request->tablename)->where('id',$request->id)->first();
        echo json_encode($result);
    }
    public function getByData(Request $request){
        $result = DB::table($request->tablename)->where($request->except('tablename'))->get();
        echo json_encode($result);
    }
    public function delete(Request $request){
        DB::table($request->tablename)->where('id',$request->id)->delete();
        echo json_encode('successful');
    }


    public function saveUser(Request $request){
        $id = DB::table('login')->insertGetId($request->only(['email','password','usertype']));


        $insert_array =  $request->except(['email','password','usertype','tablename']);
        $insert_array['loginid']= $id;

        DB::table($request->tablename)->insert($insert_array);

        echo json_encode('success');
    }
    public function deleteUser(Request $request){
        DB::table('login')->where('id',$request->id)->delete();
        DB::table($request->tablename)->where('loginid',$request->id)->delete();
        echo json_encode('success');
    }
    public function getUserById(Request $request){
        $result = DB::table('login')->join($request->tablename,'login.id','=',"$request->tablename.loginid")->where('loginid',$request->loginid)->first();
        echo json_encode($result);
    }
    public function updateUser(Request $request){
        DB::table('login')->where('id',$request->id)->update($request->only(['email']));
        DB::table($request->tablename)->where('loginid',$request->id)->update( $request->except(['email','tablename']));
        echo json_encode('success');
    }


    public function Login(Request $request){
        $result = DB::table('login')->where($request->all())->first();

        // dd($request->all());
        if($result){

        
        $usertype = $result->usertype;
        $userdata=[];

        if($usertype==0){
            $userdata= $result;
        }else if($usertype==1){
            $userdata = DB::table('login')->join('student','login.id','=','student.loginid')->where($request->all())->first();
        }
        else if($usertype==2){
            $userdata = DB::table('login')->join('teacher','login.id','=','teacher.loginid')->where($request->all())->first();
        }
        else if($usertype==3){
            $userdata = DB::table('login')->join('resource_teacher','login.id','=','resource_teacher.loginid')->where($request->all())->first();
        }
        else if($usertype==4){
            $userdata = DB::table('login')->join('corporate','login.id','=','corporate.loginid')->where($request->all())->first();
        }
        else if($usertype==6){
            $userdata = DB::table('login')->join('jobadmin','login.id','=','jobadmin.loginid')->where($request->all())->first();
        }

        echo json_encode($userdata);
    }else{
        echo json_encode('invalid');
    }


    }
 


    public function fileupload(Request $request)
 {

    // $request->name;
        $image = $request->file('file');
        $imagename = time() . '_' . $image->getClientOriginalName();
        $image->move('public/img', $imagename);
        echo json_encode($imagename);
    }

}