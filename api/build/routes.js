"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const listCategories_1 = require("./app/useCases/categories/listCategories");
const createCategory_1 = require("./app/useCases/categories/createCategory");
const createProducts_1 = require("./app/useCases/products/createProducts");
const celebrate_1 = require("celebrate");
const uploads_1 = require("./config/uploads");
const multer_1 = __importDefault(require("multer"));
exports.router = express_1.default.Router();
//Configuração dos uploads
const uploads = (0, multer_1.default)({ storage: uploads_1.multerConfig });
//Listar categorias
exports.router
    .get('/categories', listCategories_1.listCategories);
//Criar categorias
exports.router
    .post('/categories', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: celebrate_1.Joi.object().keys({
        name: celebrate_1.Joi.string().required(),
        icon: celebrate_1.Joi.string().required()
    })
}), createCategory_1.createCategory);
//Listar Produtos
exports.router
    .get('/products', (req, res) => {
    res.send('ok');
});
//Criar Produtos
exports.router.post('/products', uploads.single('image'), createProducts_1.createProducts);
//Listar categorias de um produto especifico
exports.router
    .get('/categories/:categoryId/products', (req, res) => {
    res.send('ok');
});
//Mudar Status da Ordem
exports.router
    .patch('/orders', (req, res) => {
    res.send('ok');
});
exports.router.delete('/orders/:orderId', (req, res) => {
    res.send('ok');
});
