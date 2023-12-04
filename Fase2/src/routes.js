// Configura as rotas

import express from 'express';

const router = express.Router();

import { buscarTodos, buscarUm, inserir, alterar, excluir } from './controllers/ClienteController.js';

router.get('/clientes', buscarTodos);
router.get('/cliente/:Id_Cliente', buscarUm);
router.post('/cliente', inserir);
router.put('/cliente/:Id_Cliente', alterar);
router.delete('/cliente/:Id_Cliente', excluir);

export { router as default};