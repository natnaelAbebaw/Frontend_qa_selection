// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@nuxtjs/storybook", "@pinia/nuxt"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
        },
      ],
    },
  },
  vite: {
    optimizeDeps: {
      include: ["jsdoc-type-pratt-parser"],
    },
  },
  components: [
    "~/components",
    "~/components/molecules",
    "~/components/atoms",
    "~/components/organizations",
  ],
});
