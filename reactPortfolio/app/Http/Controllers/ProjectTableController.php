<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProjectTableModel;

class ProjectTableController extends Controller
{
    function onSelectThree(){
        return $result = ProjectTableModel::limit(3)->get();
    }

    function onSelectAll(){
        return $result = ProjectTableModel::all();
    }

    function onSelectDetails($projectID){
        $id = $projectID;
        return $result = ProjectTableModel::where(['id'=>$id])->get();
    }

}
