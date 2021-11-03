import { gql } from "apollo-server-core";

export type Order = "ASC" | "DESC";

export const typeDefs = gql`
  enum Order {
    ASC
    DESC
  }
`;
