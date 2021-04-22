<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ServicesTableModel;

class ServicesTableController extends Controller
{
    function onSelect(){
        return $result = ServicesTableModel::all();
    }
}
