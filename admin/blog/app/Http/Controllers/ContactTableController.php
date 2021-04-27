<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ContactTableModel;

class ContactTableController extends Controller
{
    function onSelectAll(){
        $result = ContactTableModel::all();
        return $result;
    }
}
