const express = require('express');
const router = express.Router();

// Importando o banco de dados
const db = require('@/config/db');

// Rota principal para obter todos os alunos
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM aluno ORDER BY nome';

    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).send('Erro ao consultar o banco de dados');
            return console.error(err.message);
        }

        res.render('alunos', { alunos: rows });

    });
});

// Rota para obter um aluno específico pelo ID
router.get('/:id', (req, res) => {
    const sql = "SELECT * FROM aluno WHERE id = ?";
    const params = [req.params.id];

    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.render('aluno', { aluno: row });
    })
});

router.put('/:id', (req, res) => {
    // Pegamos o novo nome do corpo da requisição
    const { nome } = req.body;

    // Pegamos o ID dos parâmetros da rota
    const { id } = req.params;

    // SQL para atualizar o nome do aluno
    const sql = 'UPDATE aluno SET nome = ? WHERE id = ?';

    // Usamos db.run para executar comandos que não retornam linhas (UPDATE, INSERT, DELETE)
    db.run(sql, [nome, id], function(err) {
        if (err) {
            console.error(err.message);
            return res.status(500).send('Erro ao atualizar o aluno');
        }

        if (this.changes === 0) {
            return res.status(404).send('Aluno não encontrado');
        }

        console.log(`Aluno com ID ${id} atualizado para ${nome}`);

        // Após atualizar, redirecionamos para a página de detalhes do aluno
        res.redirect(`/aluno/${id}`);
    })
})

router.patch('/:id', (req, res) => {
    const { nome } = req.body;
    const { id } = req.params;

    const sql = 'UPDATE aluno SET nome = ? WHERE id = ?';

    db.run(sql, [nome, id], function(err) {
        if (err) {
            console.error(err.message);
            return res.status(500).send('Erro ao atualizar o aluno');
        }

        console.log(`Aluno com ID ${id} atualizado para ${nome}`);
        res.redirect(`/aluno/${id}`);
    })
})

module.exports = router;
