const mongoose = require('mongoose');

mongoose.connect(
    process.env.GAMES_DB_URI || 'mongodb://localhost/games_database', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);

module.exports = mongoose.connection;