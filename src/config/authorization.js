module.exports = function(type) {
    return (req, res, next) => {
        req.type = type;
        next();
    }
};