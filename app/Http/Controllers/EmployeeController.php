<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    public function getemployee()
    {
        $employee = DB::table('departments')->join('userinfo', 'userinfo.defaultdeptid', '=', 'departments.DeptId')->rightjoin('template', 'userinfo.userid', '=', 'template.userid')->select(DB::raw('DATE(userinfo.Birthday), DeptName, userinfo.userid, userinfo.name, userinfo.Card, userinfo.Gender, template.SN, userinfo.FPHONE, userinfo.pager, userinfo.minzu, userinfo.title '))->distinct('template.userid')->get();

        return response($employee, 200);
    }
    public function filteroption(Request $request)
    {
        if (isset($request->departmentname) && isset($request->employee)) {
            // $data= DB::table('departments')->join('userinfo', 'userinfo.defaultdeptid', '=', 'departments.DeptId')->rightjoin('template', 'userinfo.userid', '=', 'template.userid')->where('departments.DeptName', 'LIKE', "%{$request->departmentname}%")->where('userinfo.name', 'LIKE', "%{$request->employee}%")->select('DeptName', 'userinfo.userid', 'userinfo.name', 'userinfo.Card', 'userinfo.Gender', 'template.SN', 'userinfo.Birthday', 'userinfo.FPHONE', 'userinfo.pager', 'userinfo.minzu', 'userinfo.title')->distinct('template.userid')->get();
            $filter = DB::table('departments')->join('userinfo', 'userinfo.defaultdeptid', '=', 'departments.DeptId')->rightjoin('template', 'userinfo.userid', '=', 'template.userid')->where('departments.DeptName', 'LIKE', "%{$request->departmentname}%")->where('userinfo.name', 'LIKE', "%{$request->employee}%")->select('DeptName', 'userinfo.userid', 'userinfo.name', 'userinfo.Card', 'userinfo.Gender', 'template.SN', 'userinfo.Birthday', 'userinfo.FPHONE', 'userinfo.pager', 'userinfo.minzu', 'userinfo.title')->distinct('template.userid')->get();
        } elseif (isset($request->departmentname)) {
            // dd($request->departmentname);
            $filter = DB::table('departments')->join('userinfo', 'userinfo.defaultdeptid', '=', 'departments.DeptId')->rightjoin('template', 'userinfo.userid', '=', 'template.userid')->where('departments.DeptName', 'LIKE', "%{$request->departmentname}%")->select('DeptName', 'userinfo.userid', 'userinfo.name', 'userinfo.Card', 'userinfo.Gender', 'template.SN', 'userinfo.Birthday', 'userinfo.FPHONE', 'userinfo.pager', 'userinfo.minzu', 'userinfo.title')->distinct('template.userid')->get();
        } else {
            // dd($request->employee);
            $filter = DB::table('departments')->join('userinfo', 'userinfo.defaultdeptid', '=', 'departments.DeptId')->rightjoin('template', 'userinfo.userid', '=', 'template.userid')->where('userinfo.name', 'LIKE', "%{$request->employee}%")->select('DeptName', 'userinfo.userid', 'userinfo.name', 'userinfo.Card', 'userinfo.Gender', 'template.SN', 'userinfo.Birthday', 'userinfo.FPHONE', 'userinfo.pager', 'userinfo.minzu', 'userinfo.title')->distinct('template.userid')->get();
        }
        return response($filter, 200);
    }
    public function create(Request $request)
    {
        $newemployee = Employee::create([
            'name' => $request->empname,
            'badgenumber' => $request->badgenum,
            'defaultdeptid' => $request->departmentname,
            'Gender' => $request->gender,
            'Birthday' => $request->birthday,
            'minzu' => $request->nationality,
            'title' => $request->title,
            'FPHONE' => $request->officephone,
            'pager' => $request->mobile,
            'Card' => $request->card,
            'DelTag' => 0,
        ]);
        return response($newemployee, 200);
    }
    public function update(Request $request, $id)
    {
        // dd($request->officephone, $request->mobile);
        $newemployee = Employee::where('userid', $id)->update([
            'name' => $request->empname,
            'defaultdeptid' => $request->departmentname,
            'badgenumber' => $request->badgenum,
            'Gender' => $request->gender,
            'Birthday' => $request->birthday,
            'minzu' => $request->nationality,
            'title' => $request->title,
            'FPHONE' => $request->officephone,
            'pager' => $request->mobile,
            'Card' => $request->card,
        ]);
        return response($newemployee, 200);
    }

    public function getemployeedata($id)
    {
        $individual_employee = Employee::where('userid', $id)->first();

        if (empty($individual_employee)) {
            return response(['message' => ['Username is invalid']], 500);
        }

        return response($individual_employee, 200);
    }
    public function getdepartment()
    {
        // dd('hello');
        $deparment = Department::select('DeptID', 'DeptName')->get();
        return response($deparment, 200);
    }
}
