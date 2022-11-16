import express from 'express';
import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import {createProducts } from './app/useCases/products/createProducts';
import { celebrate, Joi, Segments } from 'celebrate';
import { multerConfig } from './config/uploads';
import multer from 'multer';
import { listProducts } from './app/useCases/products/listProducts';
import { listProductsByCategory } from './app/useCases/products/listProductsByCategory';
import { createOrders } from './app/useCases/orders/createOrders';
import { listOrders } from './app/useCases/orders/listOrders';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

export const router = express.Router();

//Configuração dos uploads
const uploads = multer({storage:multerConfig});

//Listar categorias
router
    .get('/categories', listCategories);

//Criar categorias
router
    .post('/categories',celebrate({
        [Segments.BODY]:Joi.object().keys({
            name:Joi.string().required(),
            icon:Joi.string().required()
        })
    }) , createCategory);



//Listar Produtos
router
    .get('/products', listProducts);

//Criar Produtos

router
    .post('/products', celebrate({
        [Segments.BODY]:Joi.object().keys({
            name:Joi.string().required(),
            description:Joi.string().required(),
            price:Joi.string().required(),
            ingredients:Joi.array()
        })
    }),uploads.single('image') ,createProducts);

//Criar uma ordem
router
    .post('/orders', celebrate({
        [Segments.BODY]:Joi.object().keys({
            table:Joi.number().required(),
            products:Joi.object().required()
        })
    }),createOrders);

//Listar categorias de um produto especifico
router
    .get('/categories/:categoryId/products',celebrate({
        [Segments.PARAMS]:Joi.object().keys({
            categoryId:Joi.string().required()
        })

    }),listProductsByCategory);


//Cancelar Orderm
router
    .delete('/orders/:orderId', celebrate({
        [Segments.PARAMS]:Joi.object().keys({
            categoryId:Joi.string().required()
        })
    }) ,cancelOrder);

//Mudar ordem
router
    .patch('/orders/:orderId', celebrate({
        [Segments.PARAMS]:Joi.object().keys()
    }),changeOrderStatus);
//Listar ordens
router
    .get('/orders', listOrders);

