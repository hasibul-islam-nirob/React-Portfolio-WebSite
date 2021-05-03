<?php

use Illuminate\Support\Facades\Route;

//Routing For Contact
Route::get('/getAll','ContactTableController@onSelectAll')->middleware('loginCheck');
Route::post('/contactDelete','ContactTableController@onContactDataDelete')->middleware('loginCheck');

// Routing For Client Reviews
Route::get('/selectReviews','ClientReviewController@onSelectData')->middleware('loginCheck');
Route::post('/deleteReview','ClientReviewController@onDeleteData')->middleware('loginCheck');

// Routing For Courses
Route::get('/selectCourses','CourseTableController@onSelectData')->middleware('loginCheck');
Route::post('/deleteCourses','CourseTableController@onDeleteData')->middleware('loginCheck');


// Routing For Services
Route::get('/selectServices','ServicesTableController@onSelectData')->middleware('loginCheck');
Route::post('/deleteServices','ServicesTableController@onDeleteData')->middleware('loginCheck');

// Routing For Project
Route::get('/selectProject','ProjectTableController@onSelectData')->middleware('loginCheck');
Route::post('/deleteProject','ProjectTableController@onDeleteData')->middleware('loginCheck');


// Routing For Home PAge
Route::get('/countDataSummery','HomeController@CountAllData')->middleware('loginCheck');
//Route::post('/deleteProject','ProjectTableController@onDeleteData');
//
/// // Routing For Admin Login
Route::get('/login','AdminLoginController@adminLogin');
Route::get('/onLogin/{username}/{password}','AdminLoginController@onLogin');
Route::get('/logout','AdminLoginController@onLogOut');





Route::get('/', function () {
    return view('index');
})->middleware('loginCheck');

Route::get('{anyRoute}', function () {
    return view('index');
})->where('anyRoute','.*')->middleware('loginCheck');
