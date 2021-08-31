const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    notes: [Notes]!
  }
  type Notes {
    _id: ID!
    noteText: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]!
    user(username: String!): User

    note(noteId: ID!): Notes
    notes: [Notes]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addNotes(noteText: String!): Notes
    removeNotes(noteId: ID!): Notes
  }
`;
module.exports = typeDefs;
