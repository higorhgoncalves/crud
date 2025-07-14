<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AlunoController;

// Mapeia a URL /alunos para o método index do AlunoController
Route::get('/alunos', [AlunoController::class, 'index']);

Route::get('/', function () {
    return view('welcome');
});
