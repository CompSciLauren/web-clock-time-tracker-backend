import { Schema, model } from 'mongoose';

const TimeCodeSchema = new Schema({
  startDate: Date,
  endDate: Date,
}, { collection: 'Timecodes' });

TimeCodeSchema.methods.getTimeCode = function() {
  return Math.floor((this.endDate - this.startDate) / 1000);
}

const TimeCode = model('Timecode', TimeCodeSchema);

export default TimeCode;
