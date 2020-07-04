/**
 * Rota / Recurso
 */

/**
 * Metodos HTTP
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 *      - const params = request.query;
 * Route Params: Parâmetros utilizados para identificar recursos
 *      const params = request.params;
 *      - Ex.: "/user/:id" pega da url ./user/1 como id 1
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MysSQL, SQLite, PostgreSQL, Oracle, Microsoft, SQL Server
 * NoSQL, MongoDB, CounchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select(*).where()
 * ferramenta: KNEX.JS
 */
const express = require('express');

const SessionController = require('./controllers/SessionController');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

// Criando uma sessão na aplicação
routes.post('/sessions', SessionController.create);

// lista todas as ongs
routes.get('/ongs', OngController.index);
// Salva a Ong
routes.post('/ongs', OngController.create);

// lista todas incidentes
routes.get('/incidents', IncidentController.index);
// Salva os incidentes
routes.post('/incidents', IncidentController.create);

// deleta um incidente
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;