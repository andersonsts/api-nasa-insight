import { Router } from 'express';

import SolController from './app/controllers/SolController';

const routes = new Router();

routes.get('/', SolController.index);
routes.get('/info', SolController.show);

export default routes;
