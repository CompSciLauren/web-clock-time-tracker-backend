import root from './routes.root';
import register from './routes.register';
import timecode from './timecode.route';

module.exports = (app) => {
  app.use('/register/', register);
  app.use('/api/', root);
  app.use('/api/timecodes/', timecode);
};
