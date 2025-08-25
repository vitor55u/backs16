const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware para parsing de JSON
app.use(express.json());

// Middleware de CORS
const corsOptions = {
    origin: 'http://frontend.secureflow.com',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

// Middleware de monitoramento
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Recebida requisição: ${req.method} ${req.url}`);
    next();
});

// Middleware de autenticação
const autenticar = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token === 'Bearer meutokensecreto123') {
        console.log('Requisição autenticada com sucesso.');
        next();
    } else {
        console.error("Tentativa de acesso não autorizado.");
        res.status(401).send('Acesso não autorizado.');
    }
};

// Dados de pedidos
const pedidos = [
    {id: 1, produto: 'Notebook', status: 'Processando', cliente: 'UsuarioA' },
    {id: 2, produto: 'Mouse Gamer', status: 'Enviando', cliente: 'UsuarioA' },
    {id: 3, produto: 'Teclado Mecânico', status: 'Processando', cliente: 'UsuarioB' },
];

// Rotas
app.get('/', (req, res) => {
    res.status(200).send("Bem-vindo a API de Pedidos! use /pedidos ou /status.");
});

app.get('/pedidos', autenticar, (req, res) => {
    res.json(pedidos);
});

app.get('/status', (req,res) => {
    res.status(200).send('API está funcionando!');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
fetch('http://localhost:3000/pedidos', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer meutokensecreto123',
    'Content-Type': 'application/json'
  }
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
