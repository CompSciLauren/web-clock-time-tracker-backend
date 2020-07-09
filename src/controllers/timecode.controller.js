var TimeCodeService = require('../services/timecode.service')

exports.getTimeCode = async function (req, res, next) {
    //Validate request parameters
    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 10;
    var time = req.params.time ? req.params.time : "09:08:00:00"
    try {
        var timeCode = await TimeCodeService.getTimeCode({}, page, limit)
        return res.status(200).json({ status: 200, data: timeCode, message: "Succesfully generated time code" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
