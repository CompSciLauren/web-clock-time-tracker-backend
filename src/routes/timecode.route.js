const express = require('express');

const router = express.Router();

const TimeCodeController = require('../controllers/timecode.controller');


router.get('/', TimeCodeController.getTimeCode);

router.get('/api/timecodes', function(req, res) {
  TimeCode.find({}).then(eachOne =>{
    res.json(eachOne);
   })
})

module.exports = router;
