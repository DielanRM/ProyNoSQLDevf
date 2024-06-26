import express from 'express';
import { createUser } from '../controllers/userController.js';

const userRoutes = express.Router();

userRoutes.post('/users', createUser);

export default userRoutes;