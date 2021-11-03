import { gql } from "apollo-server-core";

export interface UsuarioFilterLikes {
  login?: string;
  nome?: string;
}

export const typeDefs = gql`
  input UsuarioFilterLikes {
    login: String
    nome: String
  }
`;
