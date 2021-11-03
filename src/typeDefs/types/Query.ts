import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type Query {
    api: Api!

    anexos(
      filter: AnexoFilter
      pagination: Pagination
      sort: [Sort!]
    ): AnexoConnection!
    anexo(id: AnexoID!): Anexo!

    usuarios(
      filter: UsuarioFilter
      pagination: Pagination
      sort: [Sort!]
    ): UsuarioConnection!
    usuario(id: UsuarioID!): Usuario!
  }
`;
