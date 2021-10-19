const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    const token = req.headers.authorization

    jwt.verify(token, 'Rahasia Banget', function(err, decoded) {
        if(err) {
            return res.status(403).json({
                message: err.message
            })
        }

        req.user = decoded;
        return next();
    })
}