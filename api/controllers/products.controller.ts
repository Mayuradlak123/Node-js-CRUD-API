// controllers/lapilproductsController.ts
import { Request, Response } from 'express';

interface Product {
  id: number;
  name: string;
  price: number;
}

let products: Product[] = [
  { id: 1, name: 'Product A', price: 10 },
  { id: 2, name: 'Product B', price: 20 },
];

export const getProducts = (req: Request, res: Response): void => {
  res.json(products);
};

export const getProductById = (req: Request, res: Response): void => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};

export const createProduct = (req: Request, res: Response): any => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }

  const newProduct: Product = {
    id: products.length + 1,
    name,
    price,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
};

export const updateProductById = (req: Request, res: Response): any => {
  const productId = parseInt(req.params.id, 10);
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }

  products[productIndex] = { ...products[productIndex], name, price };

  res.json(products[productIndex]);
};

export const deleteProductById = (req: Request, res: Response): void => {
  const productId = parseInt(req.params.id, 10);
  products = products.filter((p) => p.id !== productId);
  res.json({ message: 'Product deleted successfully' });
};
