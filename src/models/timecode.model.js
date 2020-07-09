import { Schema, model } from 'mongoose';

const TimeCodeSchema = new Schema({
  startTime: String,
  endTime: String,
});

var TimeCode = mongoose.model('TimeCode', TimeCodeSchema);
TimeCodeSchema.methods.getTimeCode = function() {
  return this.endTime - this.startTime;
}

export default TimeCode;
