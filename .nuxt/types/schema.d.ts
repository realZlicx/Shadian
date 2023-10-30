import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["site"]?: typeof import("C:/Users/omkar/OneDrive/Documents/GitHub/Shadian/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["robots"]?: typeof import("nuxt-simple-robots").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["storyblok"]?: typeof import("@storyblok/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["C:/Users/omkar/OneDrive/Documents/GitHub/Shadian/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-simple-robots", Exclude<NuxtConfig["robots"], boolean>] | ["@storyblok/nuxt", Exclude<NuxtConfig["storyblok"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   "nuxt-simple-robots": {
      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<any>,

      robotsEnabledValue: string,

      robotsDisabledValue: string,
   },
  }
  interface PublicRuntimeConfig {
   storyblok: {
      accessToken: string,

      enableSudoMode: boolean,

      usePlugin: boolean,

      bridge: boolean,

      devtools: boolean,

      globalDir: string,

      apiOptions: any,
   },

   site: {
      _context: {
         defaultLocale: string,

         trailingSlash: string,

         titleSeparator: string,

         name: string,

         indexable: string,

         debug: string,
      },

      defaultLocale: string,

      trailingSlash: boolean,

      titleSeparator: string,

      name: string,

      indexable: boolean,

      debug: boolean,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }