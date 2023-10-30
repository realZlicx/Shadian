/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./storyblok/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],

  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'agrandir': ['Agrandir'],
      'agrandir-grand': ['Agrandir Grand'],
      'agrandir-narrow': ['Agrandir Narrow'],
      'agrandir-wide': ['Agrandir Wide'],
      'agrandir-tight': ['Agrandir Tight'],

    },
    extend: {},
  },
  plugins: [],
}