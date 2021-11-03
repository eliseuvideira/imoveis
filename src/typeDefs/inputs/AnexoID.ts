import { gql } from "apollo-server-core";

export interface AnexoID {
  anexoId: number;
}

export const typeDefs = gql`
  input AnexoID {
    anexoId: ID!
  }
`;
