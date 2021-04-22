<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InformationETCtableModel extends Model
{
    protected $table = 'information_etc_table';
    protected $primaryKey = "id";
    public $incrementing = true;
    protected $keyType = "int";
    public $timestamps = false;
}
