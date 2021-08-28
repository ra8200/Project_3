const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    saveNotes: [Notes]
  }
  type Notes {
    _id: ID
    text: String
  }

  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    notes(username: String!): [Notes]
    note(notesId: ID!): Notes
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addNotes(text: String): Notes
    removeNotes(notesId: ID!): Notes
  }
`;
module.exports = typeDefs;
