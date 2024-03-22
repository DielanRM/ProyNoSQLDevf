import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connect = ()=>{
    mongoose.connect(process.env.DB_URI);

    const connection = mongoose.connection;
    connection.once('open', ()=>{
        console.log('Coneccion exitosa');
    })
    connection.once('error', ()=>{
        console.error('Error al conectar a la DB');
    })
}

export { connect }