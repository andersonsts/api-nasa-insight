import { Router } from 'express';

import SolController from './app/controllers/SolController';

const routes = new Router();

routes.get('/', SolController.index);
routes.get('/info', SolController.show);

export default routes;

// Api retorna a média das temperaturas na rota '/'; * Checked *

// Se for enviada a query string SOL a api deve retornar a média de temperatura
// do sol disponivel.
