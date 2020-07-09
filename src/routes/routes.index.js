import root from './routes.root';

module.exports = (app) => {
  app.use('/api/', root);
};
