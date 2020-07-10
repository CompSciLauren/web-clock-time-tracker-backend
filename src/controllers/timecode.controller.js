import TimeCode from '../models/timecode.model';

const timeCodeController = async (req, res) => {
  try {
    TimeCode.createTimeCode(new TimeCode({ id: req.body.id }), req.body.description);
    res.status(200);
    res.send('Ok');
  } catch (e) {
    res.status(400);
    res.send(e.message);
  }
};

export default timeCodeController;
