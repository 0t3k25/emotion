export default {
  mode: "spa",
  env: {},
  head: {
    title: "emotion",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js TypeScript project",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/main.css", "@mdi/font/css/materialdesignicons.css"],
  build: {},
  buildModules: ["@nuxt/typescript-build"],
  modules: ["@nuxtjs/axios", "@nuxtjs/vuetify"],
  axios: {},
};
