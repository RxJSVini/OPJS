import { Request, Response} from 'express';
import { Category } from '../../models/Category';
import { ICategoryProps } from '../../interfaces/ICategoryProps';

export async function createCategory(req:Request, res:Response):Promise<Response>{

    try {
        const { name, icon } = req.body;

        const category = await Category.create<ICategoryProps>({
            name,
            icon
        });

        return res.json(category);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error:'Internal Server Error'});
    }

}
