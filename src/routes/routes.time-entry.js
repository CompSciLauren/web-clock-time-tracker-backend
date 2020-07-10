import express from 'express';
import timeEntryController from '../controllers/time-entry.controller';

const timeEntry = express.Router();

timeEntry
  .post('/', timeEntryController);

export default timeEntry;
