import express from 'express';
import rootController from '../controllers/root.controller';

const root = express.Router();

root
  .get('/', rootController);

export default root;
