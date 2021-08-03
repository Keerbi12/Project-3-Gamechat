const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Game {
        name: String! 
    }

    type Query {
        getGame: [Game]
    }

    
`
module.exports =  typeDefs;