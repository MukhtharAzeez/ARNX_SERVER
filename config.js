const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.set('strictQuery', false);
    try {
        // eslint-disable-next-line camelcase
        const DB_name = { dbname: 'Flow_music' };
        await mongoose.connect('mongodb+srv://MukhtharAzeez:zPJm0DWYQP8iBJbC@cluster0.gtk0l6y.mongodb.net/arnx?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to Database at');
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;