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
  app: {
    head: {
      title: 'Desafio CATe - João Victor',
    },
  },
  imports: {
    dirs: [
      "enums",
      "errors",
      "models",
      "constants"
    ]
  },
  nitro: {
    routeRules: {
      "/images/**": {
        headers: {
          'Cache-Control': 'public, max-age=3600'
        }
      }
    }
  }
});
