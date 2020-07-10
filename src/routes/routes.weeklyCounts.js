import express from 'express';
import weeklyCountsController from '../controllers/weeklyCounts.controller';

const weeklyCounts = express.Router();

weeklyCounts
  .get('/', weeklyCountsController);

export default weeklyCounts;
