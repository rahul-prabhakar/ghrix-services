const User = require('../model/user.model');
const Punch = require('../model/punch.model');

exports.entry = (req, res) => {
    let { type } = req.body;

    let p = new Punch({
        empID: req.user.empID,
        punchType: type,
        punchTime: new Date(),
    });

    p.save((err) => {
        if (err)
            next(err);
        res.status(201).send('');
    })
};

exports.changePassword = (req, res) => {
    let { oldPwd, newPwd } = req.body;

    User.findByUsername({ username: req.user.username }).changePassword(oldPwd, newPwd, (err, userModel, pwdErr) => {
        if (err) next(err);
        if (pwdErr) next(pwdErr);
        res.status(201).send('');
    });
};