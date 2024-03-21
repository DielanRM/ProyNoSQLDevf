import express from 'express';

const api = express();

api.listen(3000, ()=>{
    console.log('API corriendo en puerto 3000');
});