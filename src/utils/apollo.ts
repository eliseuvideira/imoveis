import { createApollo } from "@ev-graphql-2/create-apollo";
import { logging } from "../plugins/logging";
import { Context, context } from "./context";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

export const apollo = createApollo<Context>({
  typeDefs,
  resolvers,
  context,
  plugins: +process.env.DEBUG_GRAPHQL ? [logging()] : undefined,
});
