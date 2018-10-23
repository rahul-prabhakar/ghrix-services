const User = require('./model/user.model');
console.log("HEREEE")

User.findOne({ username: 'rahul.prabhakar' }, (err, res) => {
    if (!res.username)
        User.register({
            username: 'rahul.prabhakar',
            privileges: ['Employee', 'Admin'],
            empID: 1919
        }, 'Ind1an', (err, user) => {
            if (err) console.error(err);
            console.log(user);
        });
});