import express from 'express';
import authenticationMiddleware from '../middleware/authentication.js';
import { placeOrder, verifyOrder, userOrders } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post('/place', authenticationMiddleware, placeOrder);
orderRouter.post('/verify', verifyOrder);
orderRouter.post('/userorders', authenticationMiddleware, userOrders);

export default orderRouter;