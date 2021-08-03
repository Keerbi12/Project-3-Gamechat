const { User } = require('../models');

const resolvers = {
    Query: {
        getUser() {
            return User.find({});
        }, 
    },
};

module.exports =  resolvers;