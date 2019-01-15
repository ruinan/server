var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var dbConnect = require('./db/connect');
var indexRouter = require('./routes/index');

// database
dbConnect();

var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', socket => {
  console.log('socket is running');
  socket.emit('record', { hello: 'world' });
  socket.on('x', function(data) {
      console.log(data);
  });
  socket.on("disconnect", () => console.log("Client disconnected"));
});


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


app.use('/', indexRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log('error is comming');
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({ error: res.locals.error });
});

module.exports = {
    app,
    server,
    io,
};
