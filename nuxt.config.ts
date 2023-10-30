// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css','~/assets/fonts/stylesheet.css'],
  modules: ['nuxt-simple-robots', "@storyblok/nuxt"],
  storyblok: {
    accessToken: "Wul3mbrS7oUWQ6U1mMk80gtt"
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})