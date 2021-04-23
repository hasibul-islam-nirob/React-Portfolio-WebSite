<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HomePageETCtableModel;

class HomePageETCtableController extends Controller
{
    function onSelectVideo(){
        return $result = HomePageETCtableModel::select('homePage_video_description','homePage_video_url')->get();
    }

    function onSelectCountArea(){
        return $result = HomePageETCtableModel::select('homePage_total_project','homePage_total_client')->get();
    }

    function onSelectTechDes(){
        return $result = HomePageETCtableModel::select('homePage_tech_text')->get();
    }

    function onSelectHomeTopTitle(){
        return $result = HomePageETCtableModel::select('homePage_title','homePage_subtitle')->get();
    }

}
