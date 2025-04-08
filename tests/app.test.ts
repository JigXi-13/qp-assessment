import request from 'supertest';
import express from 'express';
import { Request, Response } from 'express';
import app from '../src/app';

describe('GET /', () => {
  it('should return welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Grocery Booking API is live!');
  });
});
