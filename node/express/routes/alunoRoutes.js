const express = require('express');
const router = express.Router();

const AlunoController = require('@controllers/alunoController');

router.get('/', AlunoController.listarAlunos);
router.get('/add', (req, res) => {
    res.render('add_aluno');
});
router.post('/add', AlunoController.adicionarAluno);
router.get('/:id', AlunoController.mostrarAluno);
router.patch('/:id', AlunoController.atualizarAluno);
router.delete('/:id', AlunoController.excluirAluno);

module.exports = router;
