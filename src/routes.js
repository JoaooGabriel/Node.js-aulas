const {Router} = require('express');

const routes = Router();

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

//Query Params-> request.query (Filtros, ordenação, paginação, ...)
//Route Params-> request.params (Identificar um recurso na alteração ou remoção)
//Body-> request.body (Dados para a criação ou alteração de um resgistro)

routes.post('/devs', (request, response) => {
    console.log('request.body')
    return response.json({ message: "Hello OMnistack" });
});

module.exports = routes;
