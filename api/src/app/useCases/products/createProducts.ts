import { Request, Response } from 'express';
import { Product } from '../../models/Product';
import { IProductsProps } from '../../interfaces/IProductsProps';
export async function createProducts(req:Request, res:Response){
    try {
        const { name ,description, price, category, ingredients} = req.body;
        const imagePath = req.file?.filename;
        const products = await Product.create<IProductsProps>(
            {
                name:name,
                description:description,
                price:Number(price),
                category:category,
                ingredients:ingredients ? JSON.parse(ingredients) : [],
                imagePath
            }
        );
        return res.json(products);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error:'Internal Server Error'});
    }

}
