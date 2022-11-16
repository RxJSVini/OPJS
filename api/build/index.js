"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = require("./routes");
const celebrate_1 = require("celebrate");
const app = (0, express_1.default)();
//Para garantir que caso o banco de dados esteja com problema a aplicação não consiga inicializar, utilizamos essa estrutura abaixo.
mongoose_1.default.connect('mongodb://localhost:27017')
    .then(() => {
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use('/api', routes_1.router);
    app.use((0, celebrate_1.errors)());
})
    .catch((err) => console.log('Erro ao tentar se conectar com o banco de dados', err));
app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});
