import User from '../models/user.model';

const registerController = async (req, res) => {
  // eslint-disable-next-line consistent-return
  User.register(new User({ username: req.body.email }), req.body.password,
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

export default registerController;
