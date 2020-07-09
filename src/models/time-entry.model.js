import { Schema, model } from 'mongoose';

const TimeEntrySchema = new Schema({
  username: String,
  timestamp: String,
  timeIn: Date,
  timeOut: Date
});

const TimeEntry = model('TimeEntry', TimeEntrySchema);

export default TimeEntry;
