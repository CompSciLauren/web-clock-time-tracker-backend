import TimeEntry from '../models/time-entry.model';

const weeklyCountsController = async (req, res) => {
  const now = new Date();
  const currentDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  nextDay.setDate(nextDay.getDate() + 1);

  const data = {};
  for (let i = now.getDay(); i >= 0; i -= 1) {
    // eslint-disable-next-line no-await-in-loop
    const results = await TimeEntry.find({
      timeIn: { $gte: currentDay, $lt: nextDay },
      username: req.query.username,
    });
    results.forEach((el) => {
      if (el.timeIn && el.timeOut) {
        if (data[el.timeCode]) {
          data[el.timeCode][i] += (Math.abs(el.timeOut - el.timeIn) / 36e5);
        } else {
          data[el.timeCode] = new Array(7).fill(0);
          data[el.timeCode][i] = (Math.abs(el.timeOut - el.timeIn) / 36e5);
        }
      }
    });
    currentDay.setDate(currentDay.getDate() - 1);
    nextDay.setDate(nextDay.getDate() - 1);
  }
  res.status(200);
  res.send(data);
};

export default weeklyCountsController;
