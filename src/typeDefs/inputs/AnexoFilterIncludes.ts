import { gql } from "apollo-server-core";

export interface AnexoFilterIncludes {
  anexoId?: string[];
  nome?: string[];
  mimetype?: string[];
  createdAt?: Date[];
}

export const typeDefs = gql`
  input AnexoFilterIncludes {
    anexoId: [ID!]
    nome: [String!]
    mimetype: [String!]
    createdAt: [DateTime!]
  }
`;
