import express from 'express';
import timeCodeController from '../controllers/timecode.controller';

const router = express.Router();

router.post('/', timeCodeController);

export default router;
