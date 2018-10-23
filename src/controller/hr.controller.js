const Employee = require('../model/user.model');
const PasswordUtil = require('../utils/password.util');

exports.addEmployee = (req, res) => {
    let emp = {...req.body, username: req.body.empID }
    let tempPassword = PasswordUtil.generateTempPassword();
    Employee.register(emp, tempPassword, (err, user) => {
        if (err) {
            res.status(500);
            res.send(`${JSON.stringify(err)}`)
        }
        res.status(201).send('');
    })
};

exports.getEmployee = ((req, res) => {
    Employee.findOne({ empID: req.params.id }, (err, emp) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        res.status(200).send(emp);
    });

});
exports.delEmployee = ((req, res) => {
    Employee.findOneAndDelete({ empID: req.params.id }, (err, emp) => {
        if (err) {
            res.status(500);
            console.error(err);
            return next(err);
        }
        res.status(204).send('');
    });

});
exports.updateEmployee = ((req, res) => {
    Employee.findOneAndUpdate({ empID: req.params.id }, { $set: req.body }, (err, prod) => {
        if (err) next(err);
        res.status(204).send('');
    })
});
exports.getAllEmployees = ((req, res) => {
    Employee.find({}, (err, emp) => {
        if (err) next(err);
        res.status(200).send(emp);
    })
});
exports.searchEmployee = ((req, res) => {
    Employee.find(req.body, (err, emp) => {
        if (err) next(err);
        res.status(200).send(emp);
    });
});