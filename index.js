const express = require ('express');
const server = express();
server.use(express.json());

const tarefa = [
    {id: 1, descrição: 'Comprar pão', finalizado: false},
    {id: 2, descrição: 'Comprar leite', finalizado: false}
];

//middlewares:

server.get('/tarefa', function(request, response){
    return response.json(tarefa);
});

server.post('/tarefa', function(request, response){
    const inserido = request.body;
    tarefa.push(inserido);
    return response.status(201).send();
});

server.delete('/tarefa/:id', async function(resquest, response){
    const id = request.params.id;
    tarefa.forEach(function(t){
        if(id == t.id){
            tarefa.remove(t);
            break;
        }
    })
    return response.status(200).send();
});

server.put('/tarefa', async function(request, response){

});

server.listen(3000);