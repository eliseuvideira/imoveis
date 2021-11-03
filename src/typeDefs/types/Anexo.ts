import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type Anexo {
    ## fields
    anexoId: ID!
    nome: String!
    mimetype: String!
    createdAt: DateTime!

    ## edges
    url: String!
  }
`;
