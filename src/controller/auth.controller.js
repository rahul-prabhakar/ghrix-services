const jwt = require('jsonwebtoken');
const { secrets } = require('../config/passport/jwt')
exports.login = (req, res) => {
    let { user } = req;
    if (!user) {
        return res.status(400).json({
            message: 'Login failed',
            user: user
        });
    }
    req.login(user, { session: false }, (err) => {
        if (err) {
            res.send(err);
        }
        let token = {}
        for (let privilege of user.privileges)
            token[privilege] = jwt.sign(user.username, secrets[privilege]);
        return res.json({ user, token });
    });
};

exports.logout = (req, res) => {
    req.logout();
    return res.status(200).send('');
}