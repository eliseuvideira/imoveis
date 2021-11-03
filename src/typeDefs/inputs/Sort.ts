import { gql } from "apollo-server-core";
import { Order } from "../../typeDefs/enums/Order";

export interface Sort<T = Record<string, any>> {
  field: keyof T;
  order: Order;
}

export const typeDefs = gql`
  input Sort {
    field: String!
    order: Order = ASC
  }
`;
