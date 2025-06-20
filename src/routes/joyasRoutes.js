import { Router } from 'express';
import { getLimitOrderPages } from '../controllers/joyasController.js';

const joyasRouter = Router()

joyasRouter.get('/joyas_limit_orderBy_page', getLimitOrderPages)

export default joyasRouter;