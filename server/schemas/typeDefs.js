const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    notes: [String]!
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]!
    user(userId: ID!): User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addNotes(userId: ID!, note: String!): User
    removeNotes(note: String!): User
  }
`;
module.exports = typeDefs;
