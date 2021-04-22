<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ChartTableModel;

class ChartTableController extends Controller
{
    function onAllSelect(){
        return $result = ChartTableModel::all();

    }
}
