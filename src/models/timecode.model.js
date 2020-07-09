import { Schema, model } from 'mongoose';

const TimeCodeSchema = new Schema({
  _id: mongoose.Types.ObjectId(),
  description: String,
});

TimeCodeSchema.methods.getTimeCode = function () {
  return Math.floor((this.endDate - this.startDate) / 1000);
};

const TimeCode = model('Timecode', TimeCodeSchema);

export default TimeCode;
