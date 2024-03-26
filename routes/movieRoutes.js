import express from 'express';
import { createMovie } from '../controllers/movieController.js';

const carRoutes = express.Router();

carRoutes.post('/movies', createMovie);



export default carRoutes; 