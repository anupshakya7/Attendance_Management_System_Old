<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    public function getemployee(){
        $employee = DB::table('iclock')->join('departments','iclock.DeptID','=','departments.DeptId')->rightJoin('userinfo','departments.DeptId','=', 'userinfo.defaultdeptid')->select('iclock.SN','departments.DeptName','userinfo.name','userinfo.Card','userinfo.Gender','userinfo.Birthday','userinfo.FPHONE','userinfo.pager','userinfo.minzu','userinfo.title')->get();
        return $employee;
    }
}
