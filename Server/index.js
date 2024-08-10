const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Connection = require('./connection.js');
const userrouter = require('./routes/user.js');
const queryrouter = require ("./routes/queries.js")
const auth = require('./middlewares/auth.js');
const cookieParser = require('cookie-parser');
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
Connection();

app.use('/user', userrouter);

app.use('/query', auth , queryrouter);


