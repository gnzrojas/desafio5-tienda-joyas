import { Router } from 'express';
import { getJoyasFilter, getLimitOrderPages } from '../controllers/joyasController.js';

const joyasRouter = Router()

joyasRouter.get('/joyas_limit_orderBy_page', getLimitOrderPages);
joyasRouter.get('/joyas/filtros', getJoyasFilter);

export default joyasRouter;