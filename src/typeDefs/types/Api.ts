import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type Api {
    name: String!
    url: String!
    environment: String!
    version: String!
    language: String!
    timezone: String!
  }
`;
