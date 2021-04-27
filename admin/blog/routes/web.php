<?php

use Illuminate\Support\Facades\Route;


Route::get('/getAll','ContactTableController@onSelectAll');




Route::get('/', function () {
    return view('index');
});

Route::get('{anyRoute}', function () {
    return view('index');
})->where('anyRoute','.*');
