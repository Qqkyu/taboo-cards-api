const env = process.env.NODE_ENV || "development";

const baseConfig = {
  env,
  isDev: env === "development",
  port: process.env.PORT || 7777,
};

export default baseConfig;
