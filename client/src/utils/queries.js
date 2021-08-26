import { gql } from "@apollo/client";

export const QUERY_GET_ME = gql`
  query {
    me {
      _id
      username
      email
      password
      saveRhythms {
        rhythmid
        name
        image
        length
        counting
      }
    }
  }
`;
