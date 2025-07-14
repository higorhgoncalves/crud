const AlunoModel = require('@models/alunoModel');

const AlunoController = {
    listarAlunos: (req, res) => {
        AlunoModel.getAll((err, rows) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.render('alunos', { alunos: rows });
        });
    },

    mostrarAluno: (req, res) => {
        const { id } = req.params;
        AlunoModel.getById(id, (err, row) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            if (row) {
                res.render('aluno', { aluno: row });
            } else {
                res.status(404).send('Aluno não encontrado');
            }
        });
    },

    atualizarAluno: (req, res) => {
        const { id } = req.params;
        const { nome } = req.body;

        AlunoModel.update(id, { nome }, (err) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.redirect(`/alunos/${id}`);
        });
    },

    adicionarAluno: (req, res) => {
        const { nome } = req.body;

        AlunoModel.create({ nome }, (err) => {
            return res.status(500).send(err.message);
        });
        res.redirect('/alunos')
    },

    excluirAluno: (req, res) => {
        const { id } = req.params;
        
        AlunoModel.delete(id, (err) => {
            if (err) {
                return res.status(500).send(err.message);
            }
        });
    }
};

module.exports = AlunoController;
