import { gql } from "apollo-server-core";
import { UsuarioFilterEquals } from "./UsuarioFilterEquals";
import { UsuarioFilterIncludes } from "./UsuarioFilterIncludes";
import { UsuarioFilterLikes } from "./UsuarioFilterLikes";

export interface UsuarioFilter {
  equals?: UsuarioFilterEquals;
  includes?: UsuarioFilterIncludes;
  likes?: UsuarioFilterLikes;
}

export const typeDefs = gql`
  input UsuarioFilter {
    equals: UsuarioFilterEquals
    includes: UsuarioFilterIncludes
    likes: UsuarioFilterLikes
  }
`;
