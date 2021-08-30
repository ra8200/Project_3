import { gql } from "@apollo/client";

export const QUERY_GET_ME = gql`
  {
    me {
      _id
      username
      email
      notes {
        _id
        noteText
      }
    }
  }
`;

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
      notes
    }
  }
`;
export const QUERY_SINGLE_USER = gql`
  query singleUser($username: String!) {
    user(username: $username) {
      _id
      username
      email
      notes
    }
  }
`;
export const QUERY_NOTES = gql`
  query getNotes {
    notes {
      _id
      noteText
    }
  }
`;
export const QUERY_SINGLE_NOTE = gql`
  query singleUser($noteId: ID!) {
    note(noteId: $noteId) {
      _id
      noteText
    }
  }
`;
