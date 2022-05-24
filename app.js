const express = require('express');
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mysql = require('mysql');
const config = require('./config/config.json');
const passport = require('passport');
const passportConfig = require('./config/passport');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const campaignRouter = require('./routes/campaign');
const authRouter = require('./routes/auth');

class App{
  constructor(){
    this.app = express();
    this.setViewEngine();
    this.setMiddleWare();
    this.setStatic();
    this.getRouting();
    this.setLocals();
    this.errorHandler();
    this.setDBConnection();
  }

  setMiddleWare(){
    // HTTP -> HTTPS Redirection
    /*
    this.app.use((req, res, next) => {
      if (req.secure) {
        next();
      } else {
        const to = `https://${req.hostname}${req.url}`;
        res.redirect(to);
      }
    });
    */
    this.app.use(logger('dev'));
    this.app.use(cookieParser());
    this.app.use(passport.initialize());
    passportConfig();

  }

  setViewEngine(){
    // view engine setup
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.set('view engine', 'pug');
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  setStatic(){
    this.app.use(express.static(path.join(__dirname, 'public')));
  }

  setLocals(){
    this.app.use((req, res, next) => {
      this.app.locals.isLogin = true;
      next();
    });
          
  }

  getRouting(){
//    this.app.use(routes);
    this.app.use('/', indexRouter);
    this.app.use("/user", usersRouter);
    this.app.use("/auth", authRouter);
    this.app.use("/campaign", campaignRouter);
  }

  errorHandler(){
    // catch 404 and forward to error handler
    this.app.use(function(req, res, next) {
      next(createError(404));
    });

    // error handler
    this.app.use(function(err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });
  }
  
  setDBConnection(){
    //디비설정
    // Connection 객체 생성 
    const conn = mysql.createConnection({
      host : config.development.host,
      user : config.development.username,
      password : config.development.password,
      database : config.development.database
    });
    // Connect
    conn.connect(function (err) {   
      if (err) {     
        console.error('mysql connection error');     
        console.error(err);     
        throw err;
      } 
    });
  }
}


module.exports = new App().app;
