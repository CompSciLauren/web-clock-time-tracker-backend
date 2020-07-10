import { Schema, model } from 'mongoose';

const TimeCodeSchema = new Schema({
  id: Schema.Types.ObjectId,
  description: String,
});

exports.createTimeCode = (timeCodeData) => {
  const timeCode = new TimeCode(timeCodeData);
  return timeCode.save();
}
const TimeCode = model('Timecode', TimeCodeSchema);

export default TimeCode;
