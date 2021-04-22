<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/ChartData', ['middleware'=>'auth','uses'=>'ChartTableController@onAllSelect']);
$router->get('/ClientReview', ['middleware'=>'auth','uses'=>'ClientReviewsController@onAllSelect']);
$router->post('/Send',['middleware'=>'auth','uses'=>'ContactTableController@onContactSend']);

$router->get('/CourseHome',['middleware'=>'auth','uses'=> 'CourseTableController@onSelectFour']);
$router->get('/AllCourse', ['middleware'=>'auth','uses'=>'CourseTableController@onSelectAll']);
$router->get('/CourseDetails/{courseID}', ['middleware'=>'auth','uses'=>'CourseTableController@onSelectDetails']);

$router->get('/Footer', ['middleware'=>'auth','uses'=>'FooterTableController@onSelect']);
$router->get('/Information', ['middleware'=>'auth','uses'=>'InformationETCtableController@onSelect']);
$router->get('/Services', ['middleware'=>'auth','uses'=>'ServicesTableController@onSelect']);

$router->get('/ProjectHome',['middleware'=>'auth','uses'=> 'ProjectTableController@onSelectThree']);
$router->get('/AllProject',['middleware'=>'auth','uses'=> 'ProjectTableController@onSelectAll']);
$router->get('/ProjectDetails/{projectID}',['middleware'=>'auth','uses'=> 'ProjectTableController@onSelectDetails']);


$router->get('/HomeVideo',['middleware'=>'auth','uses'=> 'HomePageETCtableController@onSelectVideo']);
$router->get('/HomeCountArea',['middleware'=>'auth','uses'=> 'HomePageETCtableController@onSelectCountArea']);
$router->get('/HomeTechDes', ['middleware'=>'auth','uses'=>'HomePageETCtableController@onSelectTechDes']);
$router->get('/HomeTitle',['middleware'=>'auth','uses'=> 'HomePageETCtableController@onSelectHomeTopTitle']);
