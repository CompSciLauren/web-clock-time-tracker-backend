const TimeCodeService = require('../services/timecode.service');

exports.getTimeCode = async function (req, res) {
  // Validate request parameters
  const page = req.params.page ? req.params.page : 1;
  const limit = req.params.limit ? req.params.limit : 10;
  try {
    const timeCode = await TimeCodeService.getTimeCode({}, page, limit);
    return res.status(200).json({ status: 200, data: timeCode, message: 'Succesfully found time code' });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
