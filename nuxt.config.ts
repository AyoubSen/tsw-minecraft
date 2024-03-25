// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "https://kit.fontawesome.com/ea7e3fe94a.js",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  modules: ["@element-plus/nuxt", "@pinia/nuxt"],
  devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets",
  },

  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
