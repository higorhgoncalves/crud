<?php

namespace App\Http\Controllers;

use App\Models\Aluno;
use Illuminate\Http\Request;

class AlunoController extends Controller
{
    /**
     * Exibe uma lista dos alunos.
     */
    public function index()
    {
        // Busca todos os alunos, ordenados por nome, e passa para a view
        $alunos = Aluno::orderBy('nome')->get();

        // A função view() procura por arquivos .blade.php em resources/views
        // O '.' representa subdiretórios. 'alunos.index' -> /alunos/index.blade.php
        return view('alunos.index', ['alunos' => $alunos]);
    }
}
