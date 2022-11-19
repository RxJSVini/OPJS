import  express from 'express';
import path from 'node:path';
import mongoose from 'mongoose';
import { router } from './routes';
import { errors } from 'celebrate';
const app = express();

//Para garantir que caso o banco de dados esteja com problema a aplicação não consiga inicializar, utilizamos essa estrutura abaixo.

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        app.use(express.json());
        app.use(express.urlencoded({ extended:false }));
        app.use('/api', router);
        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
        app.use(errors());


    })
    .catch((err) => console.log('Erro ao tentar se conectar com o banco de dados', err));


app.listen(3001, () =>{
    console.log('Server is running on http://localhost:3001');
});
