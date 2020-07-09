import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';

import addRoutes from './routes/routes.index';
import dbConfig from './config/database';
import passportConfig from './config/passport';

mongoose.connect(dbConfig.url);
passportConfig(passport);

const app = express();
app.use(passport.initialize());

addRoutes(app);

app.listen(8000);
