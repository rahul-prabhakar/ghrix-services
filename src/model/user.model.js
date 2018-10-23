const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const EmployeeSchema = require('./personal.model');
const UserTiming = require('./user.timing.model');
const { FileSchema } = require('./common.models');

let User = new Schema({
    empID: { type: Number, unique: true, required: true },
    privileges: [String],
    personalDetails: { type: EmployeeSchema },
    personalDocs: [FileSchema],
    orgDocs: [FileSchema],
    timings: [UserTiming],
    active: Boolean,
});

User.plugin(passportLocalMongoose, {
    usernameUnique: false,
    findByUsername: function(model, queryParameters) {
        queryParameters.active = true;
        return model.findOne(queryParameters);
    }
});

module.exports = mongoose.model('user', User);