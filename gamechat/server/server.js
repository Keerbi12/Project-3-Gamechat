const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');

// error of   throw new Error('You must `await server.start()` before calling `server.' +
// wraped everything in an async function to use await server.start()
async function startServer() {
    const app = express();
    const PORT = process.env.PORT || 3001;
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await server.start()

    server.applyMiddleware({ app });

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        });
    });
};

startServer();
