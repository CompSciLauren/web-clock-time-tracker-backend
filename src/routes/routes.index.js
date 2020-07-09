import root from './routes.root';
import register from './routes.register';

module.exports = (app) => {
  app.use('/register/', register);
  app.use('/api/', root);
};
