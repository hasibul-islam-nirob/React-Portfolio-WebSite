<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\InformationETCtableModel;

class InformationETCtableController extends Controller
{
    function onSelect(){
        return $result = InformationETCtableModel::all();
    }
}
