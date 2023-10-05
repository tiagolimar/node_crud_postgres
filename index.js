import fastify from "fastify";
import postgres from "postgres";

const server = fastify();

const host = 'localhost';
const port = 3333;

server.get('/',(request,response)=>{
    return "Página inicial"
})


server.listen({
    host,
    port
})