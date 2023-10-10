import { Router } from 'express';
import { BotController } from 'controllers/bots';

export const router = Router();

router.get('/getAll', BotController.getBots);
router.post('/create', BotController.createBot);
