const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schema");

const startServer = async () => {
  const app = express();
  const port = 8000;

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });

  await mongoose.connect("mongodb://mongodb-container:27017/test", {
    useNewUrlParser: true
  });

  app.listen({ port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    )
  );
};

startServer();
