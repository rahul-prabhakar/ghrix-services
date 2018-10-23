const Schema = require('mongoose').Schema;
const { EmailSchema, Address, NameSchema } = require('./common.models');

module.exports = new Schema({
    name: { type: NameSchema, required: true },
    fatherName: { type: NameSchema },
    motherName: { type: NameSchema },
    gender: { type: String, required: true, max: 1 },
    joiningDate: { type: Date, required: true, default: new Date() },
    dateOfBirth: { type: Date, required: true },
    mobile: { type: [String], required: true },
    permanentAddress: { type: Address },
    currentAddress: { type: Address },
    email: { type: EmailSchema, },
    empGroup: { type: String },
});