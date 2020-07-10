import TimeEntry from '../models/time-entry.model';

const timeEntryController = async (req, res) => {
  const email = req.body.email;
  const latest = await TimeEntry.findOne().sort('-timeIn').exec();
  if (latest.timeOut) {
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
  } else {
    console.log(latest.timeIn);
    try {
      await TimeEntry.findByIdAndUpdate(latest._id, {"timeOut": req.body.timeOut});
      res.status(200);
      res.send('ok');
    } catch (err) {
      res.status(400);
      res.send(err.message);
    }
  }
};

export default timeEntryController;
