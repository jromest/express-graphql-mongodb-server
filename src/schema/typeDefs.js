const { gql } = require("apollo-server-express");

module.exports = typeDefs = gql`
  type Query {
    hello: String!
    cats: [Cat!]
    allUsers: [User!]
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Cat {
    id: ID!
    name: String!
  }

  type Mutation {
    createCat(name: String!): Cat!
    updateCat(id: ID!, name: String!): Cat!
    deleteCat(id: ID!): Cat!

    createUser(name: String!, email: String!): User!
    updateUser(id: ID!, name: String!, email: String!): User!
    deleteUser(id: ID!): User!
  }
`;
