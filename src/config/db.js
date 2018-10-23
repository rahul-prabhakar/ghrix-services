const mongoose = require('mongoose');
const connectionString = "mongodb://rahul:Ind1an@ds241489.mlab.com:41489/ghrix-labs";

mongoose.connect(connectionString, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose.connection;