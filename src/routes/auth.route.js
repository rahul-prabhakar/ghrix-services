const router = require('express').Router();
const auth_controller = require('../controller/auth.controller');
const passport = require('passport');

router.post('/login', passport.authenticate('local'), auth_controller.login);
router.get('/logout', passport.authenticate('jwt'), auth_controller.logout);

module.exports = router;