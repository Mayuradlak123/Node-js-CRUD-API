// tests/lapilproducts.test.ts
import request from 'supertest';
import app from '../app'; // Assuming your server file is named 'server.ts'

describe('GET /products', () => {
  it('should return a list of products', async () => {
    const response = await request(app).get('/products');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
  });
});

describe('POST /products', () => {
  it('should create a new product', async () => {
    const newProduct = { name: 'New Product', price: 30 };
    const response = await request(app).post('/products').send(newProduct);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newProduct);
  });

  it('should return 400 for invalid request body', async () => {
    const response = await request(app).post('/products').send({});
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Name and price are required' });
  });
});

// Add more test cases for other endpoints as needed
