<?php

use Illuminate\Support\Facades\Route;

//Routing For Contact
Route::get('/getAll','ContactTableController@onSelectAll');
Route::post('/contactDelete','ContactTableController@onContactDataDelete');



Route::get('/', function () {
    return view('index');
});

Route::get('{anyRoute}', function () {
    return view('index');
})->where('anyRoute','.*');
