const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: './resources/app.js',
  output: {
    path: path.resolve(__dirname),
    filename: './dist/index.js'
  },
  stats: 'errors-only',
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}
