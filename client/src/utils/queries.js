import { gql } from "@apollo/client";

export const QUERY_GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      password
      saveNotes {
        _id: ID
        text: String
      }
    }
  }
`;
export const QUERY_NOTES = gql`
  query getNotes {
    notes {
      _id: ID
      text: String
    }
  }
`;
