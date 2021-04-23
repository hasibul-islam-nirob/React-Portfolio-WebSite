<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactTableModel;

class ContactTableController extends Controller
{
    //
    function onContactSend(Request $request){


        $ContactJSONData = $request->getContent();
        $contactArray = json_decode($ContactJSONData, true);

        $name    = $contactArray['name'];
        $email   = $contactArray['email'];
        $massage = $contactArray['msg'];

        $result = ContactTableModel::insert(['person_name'=>$name, 'person_email'=> $email,'person_massage'=>$massage ]);
        if ($result == true) {
            return 1;
        } else {
            return 0;
        }
    }
}
