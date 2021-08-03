const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

const Game = model('Game', gameSchema);

module.exports = Game;