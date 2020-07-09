import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import LocalStrategy from 'passport-local';

import addRoutes from './routes/routes.index';
import dbConfig from './config/database';
import User from './models/user.model';

mongoose.connect(dbConfig.url);

const app = express();
app.use(bodyParser());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

addRoutes(app);

app.listen(8000);
