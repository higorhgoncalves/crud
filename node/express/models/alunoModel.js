const db = require('@/config/db');

const AlunoModel = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM aluno ORDER BY nome';
        db.all(sql, [], callback);
    },

    getById: (id, callback) => {
        const sql = "SELECT * FROM aluno WHERE id = ?";
        db.get(sql, [id], callback);
    },

    update: (id, data, callback) => {
        const sql = 'UPDATE aluno SET nome = ? WHERE id = ?';
        db.run(sql, [data.nome, id], callback);
    },

    create: (data, callback) => {
        const sql = 'INSERT INTO aluno (nome) VALUES (?)';
        db.run(sql, [data.nome], callback);
    },

    delete: (id, callback) => {
        const sql = 'DELETE FROM aluno WHERE id = ?';
        db.run(sql, [id], callback);
    }

};

module.exports = AlunoModel;
