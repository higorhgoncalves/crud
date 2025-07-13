// Importando os pacotes
const express = require('express');
const sqlite3 = require('sqlite3').verbose(); // verbose para mensagens de log mais detalhadas

// Criando a aplicação Express
const app = express();
const port = 3000; // Porta onde o servidor irá escutar

// Middleware para permitir que a API receba e envie dados no formato JSON
app.use(express.json());

// Conectando ao banco de dados SQLite
const db = new sqlite3.Database('escola.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
    }
})

// Criar a primeira rota da API (Endpoint)
// Rota principal para obter todos os alunos
app.get('/alunos', (req, res) => {
    const sql = 'SELECT * FROM aluno ORDER BY nome';

    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(200).json({
            "message": "success",
            "data": rows
        })
    });
});

// Rota para obter um aluno específico pelo ID
app.get('/alunos/:id', (req, res) => {
    const sql = "SELECT * FROM aluno WHERE id = ?";
    const params = [req.params.id];

    // db.get() executa a consulta e retorna apenas uma linha
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(200).json({
            "message": "success",
            "data": row
        });
    });
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log(`Acesse a lista de alunos em http://localhost:${port}/alunos`);
});

// Fechar conexão com o banco de dados ao encerrar o servidor
process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }

        console.log('Conexão com o banco de dados fechada.');
        process.exit(0);
    });
});
