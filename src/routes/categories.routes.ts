import { Router } from 'express';
import { getRepository } from 'typeorm';
import Category from '../models/Category';

const categoriesRouter = Router();

categoriesRouter.get('/', async (request, response) => {
  // TODO
});

categoriesRouter.post('/', async (request, response) => {
  const { title, value, type, category } = request.body;
  const createTransactionServive = new CreateTransactionService();

  const transaction = await createTransactionServive.execute({
    title,
    value,
    type,
    category,
  });

  return response.json(transaction);
});

categoriesRouter.delete('/:id', async (request, response) => {
  // TODO
});

categoriesRouter.post('/import', async (request, response) => {
  // TODO
});

export default categoriesRouter;
