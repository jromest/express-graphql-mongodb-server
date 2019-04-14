const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schema");

const startServer = async () => {
  const app = express();
  const port = 8000;

  // If you're not using Docker, change *mongodb-container* to *localhost*
  const db = "mongodb://mongodb-container:27017/test";

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });

  await mongoose.connect(db, { useNewUrlParser: true });

  app.listen({ port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    )
  );
};

startServer();
