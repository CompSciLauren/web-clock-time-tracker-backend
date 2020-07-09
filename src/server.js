import express from 'express';
import addRoutes from './routes/routes.index';

const app = express();

addRoutes(app);

app.listen(8000, () => {});
