const { Game } = require('../models');

const resolvers = {
    Query: {
        getGame() {
            return Game.find({});
        }, 
    },
};

module.exports =  resolvers;