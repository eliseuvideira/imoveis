import { gql } from "apollo-server-core";
import { AnexoFilterEquals } from "./AnexoFilterEquals";
import { AnexoFilterIncludes } from "./AnexoFilterIncludes";
import { AnexoFilterLikes } from "./AnexoFilterLikes";

export interface AnexoFilter {
  equals?: AnexoFilterEquals;
  includes?: AnexoFilterIncludes;
  likes?: AnexoFilterLikes;
}

export const typeDefs = gql`
  input AnexoFilter {
    equals: AnexoFilterEquals
    includes: AnexoFilterIncludes
    likes: AnexoFilterLikes
  }
`;
