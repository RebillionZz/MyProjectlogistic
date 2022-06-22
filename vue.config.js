const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@assets/scss/global/_variables.scss";'
      },
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#1890ff',
            'checkbox-size': '18px',
            'border-radius-base': '6px',
            'input-affix-width': '27px'
          },
          javascriptEnabled: true
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets')
      }
    }
  },

  lintOnSave: false
})
