import { resolver } from "../../functions/resolver";

export const api = resolver(async () => {
  return {
    name: process.env.API_NAME,
    url: process.env.API_URL,
    environment: process.env.NODE_ENV,
    version: process.env.npm_package_version,
    language: process.env.LANG,
    timezone: process.env.TZ,
  };
});
