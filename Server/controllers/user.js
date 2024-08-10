const users= require('../model/user.js');
const bcrypt = require('bcrypt');
const {jwtsign} = require('../Service/auth.js');
const saltRounds = 10;

const HandleSignup = async (req, res) => {
    const {username,email, password } = req.body;
    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
            return res.status(403).json(err);
        }
        bcrypt.hash(password, salt, async (err, hash) => {
            if (err) {
                return res.status(403).json(err);
            }
            await users.create({username, email,password:hash});
            console.log(hash);
        })
        }); 
        return res.json({message: 'User created successfully'});
}

const HandleLogin = async (req, res) => {
    const {email, password } = req.body;
    const user = await users.findOne({email});
    if(!user){
        return res.status(404).json({message: 'User not found'});
    }
    // console.log(user._id);
    bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
            console.error('Error comparing passwords:', err);
            return res.status(500).json({message: 'Internal server error'});
        }
    
    if (result) {
        console.log('Passwords match! User authenticated.');
        const token=jwtsign({
            mail:user.email
        });
        res.cookie('token',token);
        res.cookie('_id',user._id);
        res.status(200).json({message: 'User authenticated'});
    } else {
        console.log('Passwords do not match! Authentication failed.');
        res.status(401).json({message: 'Authentication failed'});
    }
    });;
}

module.exports = {HandleSignup
,HandleLogin
};
