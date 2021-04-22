<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VisitorTableModel extends Model
{
    protected $table = 'visitors_table';
    protected $primaryKey = "id";
    public $incrementing = true;
    protected $keyType = "int";
    public $timestamps = false;
}
