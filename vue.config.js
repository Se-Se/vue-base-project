const webpack = require('webpack');
const path = require("path");
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        supporter: `${process.env.VUE_APP_SUPPORTER}/dist`
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ]
  },
//   pluginOptions: {
//     "style-resources-loader": {
//       preProcessor: "scss",
//       patterns: [path.resolve(__dirname, "./src/assets/scss/index.scss")]
//     }
//   },
//   css: {
//     loaderOptions: {
//       sass: {
//         // 根据自己样式文件的位置调整
//         data: `@import "@/assets/global.scss";`
//       }
//     }
//   }
};
