const express= require('express');
const { HandleSignup,HandleLogin } = require('../controllers/user.js');

const router= express.Router();

router.post('/signup',HandleSignup);
router.post('/login',HandleLogin);

module.exports = router;