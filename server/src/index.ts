import  express from 'express';
import path from 'node:path';
import mongoose from 'mongoose';
import { router } from './routes';
import { errors } from 'celebrate';
import cors from 'cors';
import http from 'node:http';
import { Server } from 'socket.io';


//Para garantir que caso o banco de dados esteja com problema a aplicação não consiga inicializar, utilizamos essa estrutura abaixo.

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose.connect('mongodb://localhost:27017')
    .then(() => {

        app.use(express.json());
        app.use(express.urlencoded({ extended:false }));
        app.use(cors({
            origin:'http://localhost:5173'
        }));

        app.use('/api', router);

        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
        app.use(errors());


        server.listen(3001, () =>{
            console.log('Server is running on http://localhost:3001');
        });
    })
    .catch((err) => console.log('Erro ao tentar se conectar com o banco de dados', err));


