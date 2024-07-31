import request from 'supertest';
import express from 'express';

const app = express();

app.use(express.json());

describe('API Controller', () => {
    it('should fetch data from external API', async () => {
        const res = await request(app)
            .get('/api/data')
            .set('Authorization', 'Bearer token');
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('data');  // Adjust this based on actual API response structure
    });
});