import { gql } from "apollo-server-core";

export interface UsuarioID {
  usuarioId: number;
}

export const typeDefs = gql`
  input UsuarioID {
    usuarioId: ID!
  }
`;
