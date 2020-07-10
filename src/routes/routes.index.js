import root from './routes.root';
import register from './routes.register';
import timeEntry from './routes.time-entry';
import timecode from './timecode.route';
import weeklyCounts from './routes.weeklyCounts';

module.exports = (app) => {
  app.use('/register/', register);
  app.use('/api/', root);
  app.use('/api/timeEntry', timeEntry);
  app.use('/api/timecodes/', timecode);
  app.use('/api/weeklyCounts', weeklyCounts);
};
