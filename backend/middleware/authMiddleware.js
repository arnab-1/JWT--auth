const jwt = require('jsonwebtoken');

const authMiddleware = (req,res, next) => {

    const token = req.headers.authorization?.split(" ")[1]; //
    if( !token) return res.status(404).send({ message : "Token is not there"});

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (err) {
        res.status(401).json({message : 'Token is not valid'});
    }
};

module.exports = authMiddleware;