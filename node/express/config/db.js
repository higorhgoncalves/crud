const sqlite3 = require('sqlite3').verbose(); // verbose para mensagens de log mais detalhadas
const path = require('path');

// Conectando ao banco de dados SQLite
const dbPath = path.resolve(__dirname, '..', 'escola.db');
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
    }
})

module.exports = db;
