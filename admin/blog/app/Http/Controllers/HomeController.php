<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ClientReviewsModel;
use App\CourseTableModel;
use App\ContactTableModel;
use App\ProjectTableModel;
use App\ServicesTableModel;

class HomeController extends Controller
{
    function CountAllData(){
        $Client = ClientReviewsModel::count();
        $Course = CourseTableModel::count();
        $Contact = ContactTableModel::count();
        $Project = ProjectTableModel::count();
        $Services = ServicesTableModel::count();

        $TotalCount = array('clientReview'=>$Client, 'Course'=>$Course,'Contact'=>$Contact,'Project'=>$Project,'Services'=>$Services);

        return json_encode($TotalCount);

    }
}
