<!-- resources/views/alunos/index.blade.php -->
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lista de Alunos - Laravel</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
  <div class="container mt-5">
    <h1 class="mb-4">Lista de Alunos (Laravel)</h1>
    <table class="table table-striped table-bordered">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        @forelse ($alunos as $aluno)
          <tr>
            <td>{{ $aluno->id }}</td>
            <td>{{ $aluno->nome }}</td>
          </tr>
        @empty
          <tr>
            <td colspan="2">Nenhum aluno encontrado.</td>
          </tr>
        @endforelse
      </tbody>
    </table>
  </div>
</body>
</html>
