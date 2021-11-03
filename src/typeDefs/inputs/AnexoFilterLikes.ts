import { gql } from "apollo-server-core";

export interface AnexoFilterLikes {
  nome?: string;
}

export const typeDefs = gql`
  input AnexoFilterLikes {
    nome: String
  }
`;
