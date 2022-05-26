<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    public function getemployee(){
        $employee = DB::table('iclock')->join('departments','iclock.DeptID','=','departments.DeptId')->rightJoin('userinfo','departments.DeptId','=', 'userinfo.defaultdeptid')->select('iclock.SN','departments.DeptName','userinfo.name','userinfo.Card','userinfo.Gender','userinfo.Birthday','userinfo.FPHONE','userinfo.pager','userinfo.minzu','userinfo.title')->get();
        return response($employee, 200);
    }
    public function filteroption(Request $request){
         if(isset($request->birthday) && isset($request->departmentname) && isset($request->employee)){
            $filter = DB::table('iclock')->join('departments','iclock.DeptID','=','departments.DeptId')->rightJoin('userinfo','departments.DeptId','=', 'userinfo.defaultdeptid')->where('userinfo.Birthday',$request->birthday)->where('departments.DeptName',$request->departmentname)->where('userinfo.name',$request->employee)->select('iclock.SN','departments.DeptName','userinfo.name','userinfo.Card','userinfo.Gender','userinfo.Birthday','userinfo.FPHONE','userinfo.pager','userinfo.minzu','userinfo.title')->get();
    
        }
         elseif(isset($request->birthday) && isset($request->departmentname)){
            $filter = DB::table('iclock')->join('departments','iclock.DeptID','=','departments.DeptId')->rightJoin('userinfo','departments.DeptId','=', 'userinfo.defaultdeptid')->where('userinfo.Birthday',$request->birthday)->where('departments.DeptName',$request->departmentname)->select('iclock.SN','departments.DeptName','userinfo.name','userinfo.Card','userinfo.Gender','userinfo.Birthday','userinfo.FPHONE','userinfo.pager','userinfo.minzu','userinfo.title')->get();
         }
         elseif(isset($request->birthday) && isset($request->employee)){
            $filter = DB::table('iclock')->join('departments','iclock.DeptID','=','departments.DeptId')->rightJoin('userinfo','departments.DeptId','=', 'userinfo.defaultdeptid')->where('userinfo.Birthday',$request->birthday)->where('userinfo.name',$request->employee)->select('iclock.SN','departments.DeptName','userinfo.name','userinfo.Card','userinfo.Gender','userinfo.Birthday','userinfo.FPHONE','userinfo.pager','userinfo.minzu','userinfo.title')->get();
         }
         elseif(isset($request->departmentname) && isset($request->employee)){
            $filter = DB::table('iclock')->join('departments','iclock.DeptID','=','departments.DeptId')->rightJoin('userinfo','departments.DeptId','=', 'userinfo.defaultdeptid')->where('departments.DeptName',$request->departmentname)->where('userinfo.name',$request->employee)->select('iclock.SN','departments.DeptName','userinfo.name','userinfo.Card','userinfo.Gender','userinfo.Birthday','userinfo.FPHONE','userinfo.pager','userinfo.minzu','userinfo.title')->get();
         }
         elseif(isset($request->birthday)){
            $filter = DB::table('iclock')->join('departments','iclock.DeptID','=','departments.DeptId')->rightJoin('userinfo','departments.DeptId','=', 'userinfo.defaultdeptid')->where('userinfo.Birthday',$request->birthday)->select('iclock.SN','departments.DeptName','userinfo.name','userinfo.Card','userinfo.Gender','userinfo.Birthday','userinfo.FPHONE','userinfo.pager','userinfo.minzu','userinfo.title')->get();
         }
         elseif(isset($request->department)){
            $filter = DB::table('iclock')->join('departments','iclock.DeptID','=','departments.DeptId')->rightJoin('userinfo','departments.DeptId','=', 'userinfo.defaultdeptid')->where('departments.DeptName',$request->departmentname)->select('iclock.SN','departments.DeptName','userinfo.name','userinfo.Card','userinfo.Gender','userinfo.Birthday','userinfo.FPHONE','userinfo.pager','userinfo.minzu','userinfo.title')->get();
         }
         else{
            $filter = DB::table('iclock')->join('departments','iclock.DeptID','=','departments.DeptId')->rightJoin('userinfo','departments.DeptId','=', 'userinfo.defaultdeptid')->where('userinfo.name',$request->employee)->select('iclock.SN','departments.DeptName','userinfo.name','userinfo.Card','userinfo.Gender','userinfo.Birthday','userinfo.FPHONE','userinfo.pager','userinfo.minzu','userinfo.title')->get();
         }
         return response($filter, 200);   
        }
}
