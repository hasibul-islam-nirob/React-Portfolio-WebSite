<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ProjectTableModel;

class ProjectTableController extends Controller
{
    function onSelectData(){
        return $result = ProjectTableModel::all();
    }

    function onDeleteData(Request $req){
        $id = $req->input('id');
        $result = ProjectTableModel::where('id',$id)->delete();
        if ($result==true)
            return 1;
        else
            return 0;
    }
}
