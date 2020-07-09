import { Schema, model } from 'mongoose';

const TimeCodeSchema = new Schema({
  time: String,
}, { collection: 'Timecodes' });

TimeCodeSchema.methods.validTimeCode = (time) => time === this.time;

const TimeCode = model('Timecode', TimeCodeSchema);

export default TimeCode;