import { ExpressContext } from "apollo-server-express";
import { createLoaders, Loaders } from "./loaders";

export interface Context extends ExpressContext {
  loaders: Loaders;
}

export type ContextFn = (ctx: ExpressContext) => Context;

export const context: ContextFn = (ctx) => {
  const loaders = createLoaders();

  return {
    ...ctx,
    loaders,
  };
};
