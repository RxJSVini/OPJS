import {  Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function createOrders(req:Request, res:Response):Promise<Response> {
    try {
        const { table, products } = req.body;
        const orders = await Order.create({table, products});
        return res.json(orders);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error:'Internal Server Error'});
    }
}
