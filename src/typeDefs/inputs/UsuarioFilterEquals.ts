import { gql } from "apollo-server-core";

export interface UsuarioFilterEquals {
  usuarioId?: number;
  login?: string;
  lastLogin?: Date;
  nome?: string;
  isRoot?: boolean;
  resetar?: boolean;
  avatarId?: string;
  ativo?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export const typeDefs = gql`
  input UsuarioFilterEquals {
    usuarioId: ID
    login: String
    lastLogin: DateTime
    nome: String
    isRoot: Boolean
    resetar: Boolean
    avatarId: ID
    ativo: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }
`;
