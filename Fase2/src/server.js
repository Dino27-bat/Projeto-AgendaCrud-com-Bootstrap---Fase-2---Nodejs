// require('dotenv').config({path:'config.env'});

import express from 'express';
import cors from 'cors';

import routes from './routes.js';

const server = express();

server.use(cors());
express.urlencoded({extended:true});

server.use('/api', routes);

server.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`);
})
