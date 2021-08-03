const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        name: String! 
        age: Int!
    }

    type Queries {
        getUser: [User]
    }

    
`
module.exports =  typeDefs;