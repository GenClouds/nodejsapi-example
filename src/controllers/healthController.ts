import { Request, Response } from 'express';

export const getHealth = (req: Request, res: Response) => {
  const healthInfo = {
    status: 'UP',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.npm_package_version || '1.0.0',
    memoryUsage: process.memoryUsage()
  };

  res.json(healthInfo);
};