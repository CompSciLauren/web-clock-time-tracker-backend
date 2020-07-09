import TimeCode from '../models/user.model';

const timeCodeController = async (req, res) => {
  TimeCode.register(new TimeCode( req.body.id, req.body.description,
    (err) => {
      if (err) {
        res.status(400);
        res.send(err.message);
      } else {
        res.status(200);
        res.send('Ok');
      }
    });
};

export default timeCodeController;
