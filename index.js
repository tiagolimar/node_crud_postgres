import fastify from "fastify";
import postgres from "postgres";
import './DB/db.js';

const server = fastify();

const host = 'localhost';
const port = 3333;

server.get('/',(request,response)=>{
    return response.send("Página de produto")
})
server.get('/produtos',(request,response)=>{
    return response.send("Página de produtos - GET")
})
server.get('/produto/:id',(request,response)=>{
    const {id} = request.params;
    return response.send("Página de produto id:" + id +"- GET")
})
server.post('/produto',(request,response)=>{
    return response.send("Página de produto - POST")
})
server.put('/produto/:id',(request,response)=>{
    return response.send("Página de produto - PUT")
})
server.delete('/produto/:id',(request,response)=>{
    return response.send("Página de produto - DELETE")
})


server.listen({
    host,
    port
})