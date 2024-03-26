import { connect } from './config.js';
import express from 'express';
import carRoutes from './routes/movieRoutes.js';

connect();

const api = express();

api.use(express.json());

api.listen(3000, ()=>{
    console.log('API corriendo en puerto 3000');
});

api.get('/test',(req, res)=>{
    res.send('Hola esto es una prueba de proyecto');
});

api.use(carRoutes);