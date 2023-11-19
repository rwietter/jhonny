import { gql } from "@apollo/client";

export const GET_SONGS = gql`
  query Songs {
    musicas {
      data {
        id
        attributes {
          nome
          spotify
          youtube
          createdAt
        }
      }
    }
  }
`;