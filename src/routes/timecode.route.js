const express = require('express');

const TimeCode = require('../models/timecode.model');

const router = express.Router();

const TimeCodeController = require('../controllers/timecode.controller');

router.get('/', TimeCodeController.getTimeCode);

module.exports = router;
