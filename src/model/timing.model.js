const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Timing = new Schema({
    timingScheme: String,
    startTime: Date,
    endTime: Date,
    shortLeave: Number,
});

module.exports = mongoose.model('DefinedTimings', Timing);