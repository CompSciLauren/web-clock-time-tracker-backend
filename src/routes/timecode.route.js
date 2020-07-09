const express = require('express');
const router = express.Router();

var TimeCodeController = require('../controllers/timecode.controller');

router.get('/', TimeCodeController.getTimeCode);

module.exports = router;
