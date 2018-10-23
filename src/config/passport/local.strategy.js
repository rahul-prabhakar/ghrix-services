const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../../model/user.model');
const passport = require('passport');

passport.use(new LocalStrategy(UserModel.authenticate()));
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());