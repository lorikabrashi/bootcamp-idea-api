const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const exposedRoutes = require('./routes/router.exposed');
const usersRouter = require('./routes/router.users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', exposedRoutes);
app.use('/users', usersRouter);

module.exports = app;
