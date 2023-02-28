const {defineConfig} = require('@vue/cli-service');
const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin');
// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
    publicPath: './',
    transpileDependencies: true,
    pages: {
      index: {
        entry: 'examples/main.js',
        template: 'public/index.html',
        fileName: 'index.html'
      }
    },
    configureWebpack: {
      externals: {
        'vue': 'Vue',
        // 'amis': 'amis',
        // 'amis-ui': 'amisUi',
        // 'amis-core': 'amisCore',
        // 'amis-editor-core':'amisEditorCore',
        'monaco-editor': 'monaco',
        // 'amis-editor': 'amisEditor',
        // 'amis-editor-ui': 'amisEditorUi',
        // 'amis-theme-editor': 'amisThemeEditor',
        // 'amis-formula': 'amisFormula',
        'lodash': '_',
        'react': 'React',
        'react-dom': 'ReactDOM',
        'axios': 'axios',
      }
    },
    chainWebpack: config => {
      config.module
        .rule('js')
        .include.add(resolve('packages')).end()
        .use('babel').loader('babel-loader').tap(options => {
        return options
      });
      // todo: config.module
      // // 处理图片文件
      config.module
        .rule('fontawesome')
        .test(/\.svg$/)
        .use('svg-inline-loader')
        .loader('svg-inline-loader')
        .end();
      // // 处理字体文件
      // config.module
      //   .rule('fonts')
      //   .use('url-loader')
      //   .loader('url-loader')
      //   .tap(options => {
      //     console.log(options)
      //     // options.limit = 0
      //     return options
      //   });
      // config.plugin('monaco').use(new MonacoWebpackPlugin())
      config.merge({ // see https://github.com/baidu/amis/issues/5274#issuecomment-1240147983
        resolve: {
          conditionNames: ['require', 'node']
        }
      })
    }
  }
)
