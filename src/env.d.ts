declare namespace NodeJS {
  export interface ProcessEnv {
    // Environment
    NODE_ENV: "development" | "test" | "production" | "staging";
    PORT: string;

    // Api
    API_NAME: string;
    API_IMAGE: string;
    API_TOKEN: string;
    API_URL: string;

    // Localization
    LANG: string;
  }
}
