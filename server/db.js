const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true, // Ensure indexes are created
            useFindAndModify: false // avoids deprecation warnings
        });

        console.log('MongoDB connected');
    }
    catch (error) {
        console.error('MongoDB connection error: ', error);
        process.exit(1);
    }
}

module.exports = connectDB;