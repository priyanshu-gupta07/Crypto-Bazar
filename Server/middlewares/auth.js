const jwt=require('jsonwebtoken');
const {jwtverify} = require('../Service/auth.js');

const auth = async (req, res, next) => {
    try {
        const token = req.cookies?.token;
        // console.log(token);
        if(!token){
            throw new Error();
        }
        const user = jwtverify(token);
        next();
    } catch (error) {
        res.status(401).json({message: 'Please authenticate'});
    }
}

module.exports = auth;