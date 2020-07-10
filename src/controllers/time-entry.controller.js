import TimeEntry from '../models/time-entry.model';

const timeEntryController = async (req, res) => {
  const email = req.body.email;
  try {
    await TimeEntry({
      username: email,
      timeCode: req.body.timeCode,
      timeIn: req.body.timeIn
    }).save();
    res.status(200);
    res.send('ok');
  } catch (err) {
    res.status(400);
    res.send(err.message);
  }
};

export default timeEntryController;
