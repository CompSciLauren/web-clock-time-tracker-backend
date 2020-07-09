import express from 'express';
import registerController from '../controllers/register.controller';

const register = express.Router();

register
  .post('/', registerController);

export default register;
