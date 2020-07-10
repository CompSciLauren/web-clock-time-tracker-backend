import root from './routes.root';
import register from './routes.register';
import timeEntry from './routes.time-entry';

module.exports = (app) => {
  app.use('/register/', register);
  app.use('/api/', root);
  app.use('/api/timeEntry', timeEntry);
};
