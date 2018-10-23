const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Punch = new Schema({
    empID: Number,
    punchTime: Date,
    punchType: { type: String, enum: ['PunchIn', 'PunchOut', 'BreakIn', 'BreakOut', ] },
});

module.exports = mongoose.model('punch', Punch);