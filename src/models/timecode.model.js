import { Schema, model } from 'mongoose';

const TimeCodeSchema = new Schema({
  id: Schema.Types.ObjectId,
  description: String,
});

const TimeCode = model('Timecode', TimeCodeSchema);

TimeCodeSchema.methods.createTimeCode = function (timeCodeData) {
  const timeCode = new TimeCode(timeCodeData);
  return timeCode.save();
};

export default TimeCode;
