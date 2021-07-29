const express = require('express')
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config.connection');

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());