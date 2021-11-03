import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type Usuario {
    ## fields
    usuarioId: ID!
    login: String!
    lastLogin: DateTime
    nome: String!
    isRoot: Boolean!
    resetar: Boolean!
    avatarId: ID!
    ativo: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!

    ## edges
    avatar: Anexo!
  }
`;
