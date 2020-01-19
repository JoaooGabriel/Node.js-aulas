const {Router} = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

//Query Params-> request.query (Filtros, ordenação, paginação, ...)
//Route Params-> request.params (Identificar um recurso na alteração ou remoção)
//Body-> request.body (Dados para a criação ou alteração de um resgistro)

routes.post('/devs', async (request, response) => {
    const { github_username } = request.body; //Fazendo a busca direto no GitHub

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, avatar_url, bio } = (apiResponse.data); //Buscando as informações do Github e traznedo para a API

    const techsArray = techs.split(',').map(tech => tech.trim());

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
    })

    return response.json(dev);
});

module.exports = routes;
