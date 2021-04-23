<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CourseTableModel;

class CourseTableController extends Controller
{
    function onSelectFour(){
       return $result = CourseTableModel::limit(4)->get();
    }

    function onSelectAll(){
        return $result = CourseTableModel::all();
    }

    function onSelectDetails($courseID){
        $id = $courseID;
        return $result = CourseTableModel::where(['id'=>$id])->get();
    }


}
