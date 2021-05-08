const webpack = require('webpack');
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        supporter: `${process.env.VUE_APP_SUPPORTER}/dist`,
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ]
  }
}