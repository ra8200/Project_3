const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Query {
    me: User
  }
  type User {
    _id: ID!
    username: String
    email: String
    saveRhythms: [Rhythms]
  }
  type Rhythms {
    id: ID
    name: String
    image: String
    length: Int
    counting: Int
  }
  input RhythmsInput {
    id: ID
    name: String
    image: String
    length: Int
    counting: Int
  }
  type Auth {
    token: ID!
    user: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveRhythms(input: RhythmsInput!): User
  }
`;
module.exports = typeDefs;
