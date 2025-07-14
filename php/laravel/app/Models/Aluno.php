<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aluno extends Model
{
    use HasFactory;

    /**
     * A tabela associada ao model.
     *
     * @var string
     */
    protected $table = 'aluno';

    /**
     * Indica se o modelo deve ter timestamps (created_at, updated_at).
     * Como sua tabela não os tem, definimos como false.
     *
     * @var bool
     */
    public $timestamps = false;
}
