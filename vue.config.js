module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/admin': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/admin': '',
        },
      },
      '/api': {
        target: 'http://127.0.0.1:8001/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
    disableHostCheck: true,
  },

  transpileDependencies: ['vuetify'],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
