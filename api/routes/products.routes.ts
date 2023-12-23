import { createProduct, deleteProductById, getProductById, getProducts, updateProductById } from "../controllers/products.controller";

// routes/lapilproductsRoutes.js
var express = require('express');


var routes = express.Router();

routes.get('/', getProducts);
routes.get('/:id', getProductById);
routes.post('/', createProduct);
routes.put('/:id',updateProductById );
routes.delete('/:id', deleteProductById);

module.exports = routes;
