const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const registerRouter = require('./routes/register');
const dashboardRouter = require('./routes/dashboard');
const orgCredsRouter = require('./routes/orgCreds');
const credsRouter = require('./routes/creds');
const updateCredRouter = require('./routes/updateCreds');
const updateDivRouter = require('./routes/updateDiv');
const updateRoleRouter = require('./routes/updateRole');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/dashboard', dashboardRouter);
app.use('/orgCreds', orgCredsRouter);
app.use('/creds', credsRouter);
app.use('/updateCreds', updateCredRouter);
app.use('/updateDiv', updateDivRouter);
app.use('/updateRole', updateRoleRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
