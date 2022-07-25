const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})
module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  }
}
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: isProd ? '/admap' : '/',
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false
}