import { Router, Request, Response } from 'express';
import { getHealth } from '../controllers/healthController';

const router = Router();

// Hello endpoint
router.get('/hello', (req: Request, res: Response) => {
  res.json({
    message: 'Hello, World! Commit 1'
  });
});

// Health endpoint
router.get('/health', getHealth);

export default router;