const TimeCode = require('../models/timecode.model');

exports.getTimeCode = async function (query, page, limit) {
  try {
      const timeCode = await TimeCode.find(query);
      return Date.now();
  } catch (e) {
      throw Error('Error while generating time code');
  }
}
