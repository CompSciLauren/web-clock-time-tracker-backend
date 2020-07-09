import express from 'express';
import mongoose from 'mongoose';

import addRoutes from './routes/routes.index';
import dbConfig from './config/database';

mongoose.connect(dbConfig.url);

const app = express();

addRoutes(app);

app.listen(8000, () => {});
