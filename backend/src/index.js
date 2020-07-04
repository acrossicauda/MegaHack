const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/** 
 * app.use(cors({
 *  origin: 'http://meuapp.com'
 * }));
 * cors de conexão do front end com o back end
*/
app.use(cors());

// incluir json
app.use(express.json());
app.use(routes);

app.listen(3330);