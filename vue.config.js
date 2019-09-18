// vue.config.js

// const path = require('path')

module.exports = {
  lintOnSave:false,
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://adm-test-zh.ycb51.cn/', // 对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  pluginOptions: {
    lintStyleOnBuild: false, // 添加了插件(@ascendancyy/vue-cli-plugin-stylelint), 所以需要配置
    stylelint: {
      fix: true, // boolean (default: true)
      files: ['src/App.vue'] // string | [string] (default: ['src/**/*.{vue,htm,html,css,sss,less,scss}'])
      // formatter: () => { } // function (default: require('stylelint-codeframe-formatter'))
      // etc...
    }
  }
}
