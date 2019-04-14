const { gql } = require("apollo-server-express");

module.exports = typeDefs = gql`
  type Query {
    hello: String!
    allUsers: [User!]
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
    updateUser(id: ID!, name: String!, email: String!): User!
    deleteUser(id: ID!): User!
  }
`;
