import { gql } from "apollo-server-core";

export interface AnexoFilterEquals {
  anexoId?: string;
  nome?: string;
  mimetype?: string;
  createdAt?: Date;
}

export const typeDefs = gql`
  input AnexoFilterEquals {
    anexoId: ID
    nome: String
    mimetype: String
    createdAt: DateTime
  }
`;
