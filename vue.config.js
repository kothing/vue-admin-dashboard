module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/': '',
        },
      },
      '/api': {
        target: `${process.env.VUE_APP_API_URL}/api`,
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
