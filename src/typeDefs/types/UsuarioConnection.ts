import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type UsuarioConnection {
    totalCount: Int!
    items: [Usuario!]!
  }
`;
