var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

//ルートファイルの読み込み
var selectmemoRouter = require('./routes/SelectMemo.js');
var insertmemoRouter = require('./routes/InsertMemo.js');
var deletememoRouter = require('./routes/DeleteMemo.js');
var updatememoRouter = require('./routes/UpdateMemo.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//ルーティングの設定
app.use('/api/v1/selectmemo',selectmemoRouter);
app.use('/api/v1/insertmemo',insertmemoRouter);
app.use('/api/v1/deletememo',deletememoRouter);
app.use('/api/v1/updatememo',updatememoRouter);

app.use(bodyParser.urlencoded({extended: true}));

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
