import express from "express";
import cors from "cors";
import morgan from "morgan";
import { json } from "body-parser";
import { exception, notFound } from "@ev-fns/errors";

export const app = express();

export const middlewares = async (
  app: express.Express,
  middlewares: express.RequestHandler[] = [],
) => {
  app.use(cors());
  app.use(json());
  app.use(morgan("short", { skip: () => process.env.NODE_ENV === "test" }));

  if (process.env.NODE_ENV !== "production") {
    app.get("/", (req, res) => res.redirect("/graphql"));
  }

  for (const middleware of middlewares) {
    app.use(middleware);
  }

  app.use(notFound);
  app.use(exception);
};
