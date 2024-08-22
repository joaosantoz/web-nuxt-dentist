export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "~/tailwind.config.ts",
    exposeConfig: {
      level: 2,
    },
    viewer: true,
  },
  imports: {
    dirs: [
      "enums",
      "errors",
      "models",
      "constants"
    ]
  },
  routeRules: {
    "/profile/**": {
      cache: {
        maxAge: 60 * 60,
      }
    }
  }
});
