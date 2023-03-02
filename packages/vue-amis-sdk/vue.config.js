const {defineConfig} = require('@vue/cli-service');
const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");
const pkg = require("./package.json");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const Webpack = require("webpack");
const webpackBanner = `project: vue-amis-sdk@${pkg.version} \n github https://github.com/h7ml/vue-amis-sdk \n author: h7ml(h7ml@qq.com) \n Time: `;
const dateTime = new Date();
process.env.VUE_APP_VERSION = pkg.version

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
    publicPath: './',
    devServer: {
      // host: "http://127.0.0.1",
      port: 3000,
      // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
      proxy: {
        "/amis": {
          target: "https://aisuda.bce.baidu.com/",
          changeOrigin: true,
        },
        "/api": {
          target: "https://preview.pro.antdv.com/",
          changeOrigin: true,
        },
      },
    },
    productionSourceMap: false,
    transpileDependencies: true,
    pages: {
      index: {
        entry: 'examples/main.js',
        template: 'public/index.html',
        fileName: 'index.html'
      }
    },
    configureWebpack: {
      plugins: [],
    },
    chainWebpack: config => {
      config.merge({ // see https://github.com/baidu/amis/issues/5274#issuecomment-1240147983
        resolve: {
          conditionNames: ['require', 'node']
        }
      })
      if (process.env.BABEL_ENV =='production') {
        config.module
          .rule('js')
          .include.add(resolve('packages')).end()
          .use('babel').loader('babel-loader').tap(options => {
          return options
        });
        // // 处理图片文件
        config.module
          .rule('fontawesome')
          .test(/\.svg$/)
          .use('svg-inline-loader')
          .loader('svg-inline-loader')
          .end();
        // config.plugin("compressionPlugin").use(
        //   new CompressionPlugin({
        //     algorithm: "gzip", //开启gzip
        //     test: /\.js$|\.html$|\.css/, // 匹配文件名
        //     threshold: 2048, // 对超过10k的数据压缩
        //     deleteOriginalAssets: false, // 不删除源文件
        //   })
        // );
        // config
        //   .plugin("banner")
        //   .use(Webpack.BannerPlugin, [`${webpackBanner}${dateTime}`]);
        // config.plugins.push(
        //   new UglifyJsPlugin({
        //     uglifyOptions: {
        //       compress: {
        //         warnings: false,
        //         drop_debugger: true, // 注释console
        //         drop_console: true,
        //         pure_funcs: ["console.log"], // 移除console
        //       },
        //     },
        //     sourceMap: false,
        //     parallel: true,
        //   })
        // )
        config.externals = {
          'vue': 'Vue',
          // 'amis': 'amis',
          // 'amis-ui': 'amisUi',
          // 'amis-core': 'amisCore',
          // 'amis-editor-core':'amisEditorCore',
          // 'monaco-editor': 'monaco',
          // 'amis-editor': 'amisEditor',
          // 'amis-editor-ui': 'amisEditorUi',
          // 'amis-theme-editor': 'amisThemeEditor',
          // 'amis-formula': 'amisFormula',
          'lodash': '_',
          'react': 'React',
          'react-dom': 'ReactDOM',
          'axios': 'axios',
        }
        config.devtool = false;
      }
    }
  }
)
