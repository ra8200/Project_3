import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_NOTES = gql`
  mutation addNotes($userId: ID!, $note: String!) {
    addNotes(userId: $userId, note: $note) {
      _id
      username
      notes
    }
  }
`;
export const REMOVE_NOTES = gql`
  mutation removeNotes($note: String!) {
    removeNotes(note: $note)
    _id
    username
    notes
  }
`;
