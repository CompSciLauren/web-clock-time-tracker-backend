import { Schema, model } from 'mongoose';

const TimeCodeSchema = new Schema({
  id: Schema.Types.ObjectId,
  description: String,
});

const TimeCode = model('Timecode', TimeCodeSchema);

export default TimeCode;
