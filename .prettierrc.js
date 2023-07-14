export default {
  printWidth: 120,
  plugins: ["./node_modules/prettier-plugin-astro/dist/index.js"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
