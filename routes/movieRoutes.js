import express from 'express';
import { createMovie } from '../controllers/movieController.js';

const movieRoutes = express.Router();

movieRoutes.post('/movies', createMovie);



export default movieRoutes; 