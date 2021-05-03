<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ClientReviewsModel;

class ClientReviewController extends Controller
{
    function onSelectData(){
        return $result = ClientReviewsModel::all();
    }

    function onDeleteData(Request $req){
        $id = $req->input('id');
        $result = ClientReviewsModel::where('id',$id)->delete();
        if ($result==true)
            return 1;
        else
            return 0;
    }
}
