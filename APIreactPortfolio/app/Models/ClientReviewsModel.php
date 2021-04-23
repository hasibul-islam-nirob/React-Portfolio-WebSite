<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClientReviewsModel extends Model
{
    protected $table = 'client_reviews';
    protected $primaryKey = "id";
    public $incrementing = true;
    protected $keyType = "int";
    public $timestamps = false;
}
