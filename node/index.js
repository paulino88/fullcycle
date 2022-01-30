var express = require('express');
var path = require('path');
var flash = require('express-flash');
var session = require('express-session');
const port = 3000

var usersRouter = require('./users');

var app = express();

app.set('views', path.join(__dirname, '.'));
app.set('view engine', 'ejs');

app.use(session({
  secret: '123456cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(flash());

app.use('/', usersRouter);

app.listen(port, () => {
  console.log('Listen to port: ' + port)
})