const env = process.env.NODE_ENV || "development";

const baseConfig = {
  env,
  isDev: env === "development",
  port: process.env.PORT || 10000,
};

export default baseConfig;
