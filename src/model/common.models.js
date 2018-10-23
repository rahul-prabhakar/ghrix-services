const Schema = require('mongoose').Schema;

module.exports.EmailSchema = new Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
});

module.exports.FileSchema = new Schema({
    fileName: { type: String, required: true },
    path: { type: String, required: true },
    fileType: String,
    desc: String,
});

module.exports.Address = new Schema({
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    pincode: String,
});

module.exports.NameSchema = new Schema({
    firstName: { type: String, required: true, max: 100 },
    lastName: { type: String, required: true, max: 100 },
});