const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DataBase connected");
    } catch(error) {
        console.log("error while connecting database");
        process.exit(1);
    }
}

module.exports = connectDB;