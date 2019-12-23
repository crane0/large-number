const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    'large-number': './src/index.js',
    'large-number.min': './src/index.js',
  },
  mode: 'none',
  output: {
    filename: '[name].js',
    // 打包后库的名字
    library: 'largeNumber',
    // umd 表示支持 4 种方式导入模块
    libraryTarget: 'umd',
    // 可以直接调用，如果不设置，使用时需要 largeNumber.default()
    libraryExport: 'default'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/
      })
    ]
  }
}