// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: {
  //   head: {
  //     charset: "utf-8",
  //     viewport: "width=device-width, initial-scale=1",
  //   },
  // },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "nuxt-headlessui"],
  headlessui: {
    prefix: "Headless",
  },
});
