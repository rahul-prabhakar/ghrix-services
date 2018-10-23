const app = require('express')();
const bodyParser = require('body-parser');
const { emp, hr, auth } = require('./routes');
const passport = require('./config/passport');
const db = require('./config/db');
const authorization = require('./config/authorization');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

app.use('/auth', authorization("Employee"), auth);
app.use('/emp', authorization("Employee"), passport.authenticate('jwt'), emp);
app.use('/hr', authorization("Admin"), passport.authenticate('jwt'), hr);

require('./chalaoDB');
app.listen(3000);