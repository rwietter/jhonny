import { gql } from "@apollo/client";

export const GET_SHOWS = gql`
  query Shows {
    shows {
      data {
        id,
        attributes {
          local,
          latitude,
          longitude,
          data,
          createdAt,
          updatedAt,
          publishedAt
        }
      }
    }
  }
`;