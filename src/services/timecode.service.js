import TimeCode from '../models/timecode.model';

exports.getTimeCode = async function (query) {
  try {
    const timeCode = await TimeCode.find(query);
    return timeCode;
  } catch (e) {
    throw Error('Error while generating time code');
  }
};
