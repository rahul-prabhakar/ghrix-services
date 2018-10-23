const passport = require('passport');
const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");
const { secrets } = require('./jwt')
const UserModel = require('../../model/user.model');

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKeyProvider: (req, rawToken, done) => {
            var type = req.type;
            return done(null, secrets[type]);
        }
    },
    function(jwtPayload, cb) {
        return UserModel.findOne({ username: jwtPayload })
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));