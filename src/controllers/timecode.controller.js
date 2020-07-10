import TimeCode from '../models/timecode.model';

const timeCodeController = async (req, res) => {
  try {
    var timeCode = new TimeCode({ id: req.body.id, description: res.body.description });
    timeCode.save();
    res.status(200);
    res.send('Ok');
  } catch (e) {
    res.status(400);
    res.send(e.message);
  }
};

export default timeCodeController;
