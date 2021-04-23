<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ClientReviewsModel;

class ClientReviewsController extends Controller
{
    function onAllSelect(){
        return $result = ClientReviewsModel::all()->random(5);

    }
}
