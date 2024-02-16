import colors from 'vuetify/es5/util/colors'

  // Polyfill for Array.prototype.at method
  // This polyfill ensures compatibility with environments (like certain Node.js versions)
  // that do not support the Array.prototype.at method natively. Adding this polyfill at the
  // very beginning of the configuration ensures that the method is available throughout the
  // application, including during the server-side rendering and build processes.
  // This resolves issues with dependencies that may rely on this method.
  if (!Array.prototype.at) {
    Object.defineProperty(Array.prototype, 'at', {
      value: function (index) {
        index = Math.trunc(index) || 0;
        if (index < 0) index += this.length;
        if (index < 0 || index >= this.length) return undefined;
        return this[index];
      },
      writable: true,
      enumerable: false,
      configurable: true,
    });
  }

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - jpfood',
    title: 'jpfood',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  axios: {
    // サーバーサイドで行うリクエストに使用されるURL
    // 追記の必要なし
    // baseURL: process.env.API_URL
    // クライアントサイドで行うリクエストに使用されるURL(デフォルト: baseURL)
    // browserBaseURL: <URL>
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
