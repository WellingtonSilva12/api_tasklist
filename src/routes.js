import { Router } from 'express';
import UserController from './app/controllers/UserController.mjs';
import SessionController from './app/controllers/SessionController.mjs';
import authMiddleware from './app/middlewares/auth.js';
import TaskController from './app/controllers/TaskController.mjs';


const routes = new Router();

routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);

routes.post('/sessions', SessionController.store);

routes.post('/tasks',authMiddleware, TaskController.store)
routes.get('/tasks',authMiddleware, TaskController.index)
routes.put('/tasks/:task_id',authMiddleware, TaskController.update)

export default routes; 

























// import User from './app/models/User.mjs';

// routes.get('/cursos', async (req, res) => {
//   const user = await User.create({
//     name: 'João',
//     email: 'joao@example.com',
//     password_hash: '123456'
//   });

//   return res.json(user);
// });
