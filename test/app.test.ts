import request from 'supertest';
import app from '../src/app';

describe('API Routes', () => {
  describe('GET /hello', () => {
    it('should return hello message', async () => {
      const response = await request(app).get('/hello');
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Hello Commit 1, World!');
    });
  });

  describe('GET /health', () => {
    it('should return health information', async () => {
      const response = await request(app).get('/health');
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('status');
      expect(response.body.status).toBe('UP');
    });
  });
});