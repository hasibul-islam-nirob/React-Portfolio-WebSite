<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FooterTableModel;

class FooterTableController extends Controller
{
    function onSelect(){
        return $result = FooterTableModel::all();
    }
}
