<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HomePageETCtableModel extends Model
{
    protected $table = 'home_page_etc';
    protected $primaryKey = "id";
    public $incrementing = true;
    protected $keyType = "int";
    public $timestamps = false;
}
