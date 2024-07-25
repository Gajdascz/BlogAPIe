declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
      JWT_ISS: string;
      JWT_AUD: string;
      MONGO_DB: string;
    }
  }
}

export {};
