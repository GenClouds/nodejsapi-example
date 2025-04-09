import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes';

const app = express();

// Apply middleware
app.use(helmet()); // Security headers
app.use(morgan('dev')); // Request logging
app.use(express.json()); // Parse JSON request body

// Apply routes
app.use('/', routes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'An unexpected error occurred'
  });
});

export default app;