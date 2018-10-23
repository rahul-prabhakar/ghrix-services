const Schema = require('mongoose').Schema;
let Timing = new Schema({
    timingScheme: String,
    schemeId: Number,
    startTime: Date,
    endTime: Date,
    shortLeave: Number,
});

module.exports = new Schema({
    schemeId: Number,
    customScheme: { type: Timing },
    applicableFrom: Date,
    applicableTill: Date,
});