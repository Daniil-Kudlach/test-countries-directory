import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  target: 'static',
  router: {
    base: '/daniil-kudlach.github.io/',
  },
  css: [
    'assets/sass/index.sass'
  ],
  modules: [
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  runtimeConfig: {
    public: {
      restcountriesUrl: process.env.VITE_APP_RESTOUNTRIES_API_URL,
      restcountriesVersion: process.env.VITE_APP_RESTOUNTRIES_API_VERSION,
    }
  },
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
