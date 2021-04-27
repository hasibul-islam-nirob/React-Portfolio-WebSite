<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ContactTableModel;

class ContactTableController extends Controller
{
    function onSelectAll(){
        $result = ContactTableModel::get();
        return $result;
    }

    function onContactDataDelete(Request $req){
        $id = $req->input('id');
        $result = ContactTableModel::where('id',$id)->delete();
        if ($result == true){
            return 1;
        }else{
            return 0;
        }
    }




}
