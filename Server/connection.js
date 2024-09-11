const mongoose= require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

const ConnectionString="process.env.MONGO_URL";

const Connection = () => {
    return (
        mongoose.connect(ConnectionString)
        .then(() => {
            console.log('Database connected successfully');
        })
        .catch((err) => {
            console.log(err);
        })
    );
}
 
module.exports=Connection;
