module.exports.generateTempPassword = function() {
    return Math.random().toString(36).slice(-8);
}