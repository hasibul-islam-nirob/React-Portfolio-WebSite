<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CourseTableModel;

class CourseTableController extends Controller
{
    function onSelectData(){
        return $result = CourseTableModel::all();
    }

    function onDeleteData(Request $req){
        $id = $req->input('id');
        $result = CourseTableModel::where('id',$id)->delete();
        if ($result==true)
            return 1;
        else
            return 0;
    }
}
