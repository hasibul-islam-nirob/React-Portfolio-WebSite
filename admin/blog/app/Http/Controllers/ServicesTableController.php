<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ServicesTableModel;

class ServicesTableController extends Controller
{
    function onSelectData(){
        return $result = ServicesTableModel::all();
    }

    function onDeleteData(Request $req){
        $id = $req->input('id');
        $result = ServicesTableModel::where('id',$id)->delete();
        if ($result==true)
            return 1;
        else
            return 0;
    }
}
