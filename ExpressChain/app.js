const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const Blockchain = require("./util/blockchain");
const session = require('express-session');
const flash = require('connect-flash');
require('dotenv').config();
const websocket = require('./socket');
const indexRouter = require('./routes');
const mongoose = require("mongoose");
const bluebird = require("bluebird");

const app = express();
const sess = {
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}
const mongoUrl = 'mongodb://localhost:27017/admin';
(mongoose).Promise = bluebird;
mongoose.connect(mongoUrl, { useNewUrlParser: true }).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
  console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
  // process.exit();
});
mongoose.set('useCreateIndex', true);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 3000);


////////////////////////////////////////////
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session(sess));

app.use(flash());

app.use('/', indexRouter);

app.get("*",(req,res,next)=>{
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

// catch 404 and forward to error handler
app.use((req, res, next)=> {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res)=> {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const server = app.listen(app.get('port'), ()=> {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
  
websocket(server);

module.exports = app;
