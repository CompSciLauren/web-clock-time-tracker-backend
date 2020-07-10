import { Schema, model } from 'mongoose';

const TimeCodeSchema = new Schema({
  id: String,
  description: String,
});

const TimeCode = model('Timecode', TimeCodeSchema);

export default TimeCode;
