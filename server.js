import express from "express";

const server = express();
server.listen(3000, console.log("Servidor rodando na Porta 3000..."));

server.get('/', (req, res) => res.send("Hello minha tropa!"));
server.get('/users', (req, res) => res.send("Página de Usuários"));