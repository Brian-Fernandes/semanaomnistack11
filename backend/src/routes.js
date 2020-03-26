const express = require('express')

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();
// Retorna o nome da ONG no Login
routes.post('/sessions', SessionController.create);
// Listagem das ONG's já cadastradas
routes.get('/ongs', OngController.index);
// Cadastro da ONG
routes.post('/ongs', OngController.create);
// Cadastro de Casos
routes.post('/incidents', IncidentController.create);
// Listagem de Casos já cadastrados
routes.get('/incidents', IncidentController.index);
// Deleta algum Caso referente ao ID da ONG
routes.delete('/incidents/:id', IncidentController.delete)
// Lista todos casos de referente a uma ONG em específico
routes.get('/profile', ProfileController.index)
module.exports = routes;