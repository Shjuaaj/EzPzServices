import express from 'express';
import { addToCart, removeFromCart, getCart } from '../controllers/cartController.js';
import authenticationMiddleware from '../middleware/authentication.js';

const cartRouter = express.Router();

cartRouter.post('/add', authenticationMiddleware, addToCart);
cartRouter.post('/remove', authenticationMiddleware, removeFromCart);
cartRouter.post('/get', authenticationMiddleware, getCart);

export default cartRouter;