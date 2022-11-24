import {  Request, Response } from 'express';
import { Order } from '../../models/Order';
import { io } from '../../../index';
export async function createOrders(req:Request, res:Response):Promise<Response> {
    try {
        const { table, products } = req.body;

        const orders = await Order.create({table, products});


        const orderDetails = await orders.populate('products.product');

        io.emit('orders@new',orderDetails);
        return res.json(orders);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error:'Internal Server Error'});
    }
}
