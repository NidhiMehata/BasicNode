import { Router } from 'express';
import { getUsers, saveUser } from './user.controller';

export const userRouter = Router();

userRouter.route('/saveUser')
    .post(saveUser);

userRouter.route('/users')
    .get(getUsers);
