import express from "express";
import dotenv from "dotenv";

// Load Config
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT;

// Run Server 
const server = express();
server.listen(
    PORT, 
    console.log("Servidor rodando no ambiente de " + process.env.NODE_ENV + " na Porta " + PORT + "...")
);

