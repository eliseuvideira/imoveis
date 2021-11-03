import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type AnexoConnection {
    totalCount: Int!
    items: [Anexo!]!
  }
`;
