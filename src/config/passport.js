import LocalStrategy from 'passport-local';
import User from '../models/user.model';

const passportConfig = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  (req, email, password, done) => {
    process.nextTick(() => {
      // eslint-disable-next-line consistent-return
      User.findOne({ 'local.email': email }, (err, user) => {
        if (err) {
          return done(err);
        }

        if (!user) {
          const newUser = new User();
          newUser.local.email = email;
          newUser.local.password = password;

          newUser.save((saveErr) => {
            if (saveErr) {
              throw err;
            }
            return done(null, newUser);
          });
        } else {
          return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        }
      });
    });
  }));
};

export default passportConfig;
