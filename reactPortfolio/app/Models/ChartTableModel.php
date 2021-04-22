<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChartTableModel extends Model
{
    protected $table = 'chart_table';
    protected $primaryKey = "id";
    public $incrementing = true;
    protected $keyType = "int";
    public $timestamps = false;

}
