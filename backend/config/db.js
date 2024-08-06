const mongoose = require('mongoose');

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        // console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
};

module.exports = connectToDb;
