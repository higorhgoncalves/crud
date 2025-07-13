require('module-alias/register');

// Importando os pacotes
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const db = require('@/config/db'); // Importa o DB aqui para o desligamento

// Importa arquivos de rotas
const alunoRoutes = require('@/routes/alunoRoutes');

// Criando a aplicação Express
const app = express();
const port = 3000; // Porta onde o servidor irá escutar

// Configura Express e Middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public'))); // Para servir arquivos estáticos
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Para processar dados de formulários
app.use(methodOverride('_method')); // Para permitir métodos HTTP como PUT e DELETE via formulários

app.use('/alunos', alunoRoutes); // Usando as rotas definidas em alunoRoutes

// Criar a primeira rota da API (Endpoint)
// Rota principal para obter todos os alunos
app.get('/', (req, res) => {
    res.redirect('/alunos');
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
