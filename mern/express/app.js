var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// const multer = require('multer');
// const bodyParser = require('body-parser');
var cors = require('cors')


var authRouter = require('./routes/authRouter');
var userRouter = require('./routes/userRouter');
var roleRouter = require('./routes/roleRouter');
var productRouter = require('./routes/productRouter');

var app = express()

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // The directory where the images will be stored
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   },
// });


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors())

app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/role', roleRouter)
app.use('/products', productRouter)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
