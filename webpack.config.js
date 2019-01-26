const path = require('path')

module.exports = {
  mode: 'production',
  entry: './resources/app.js',
  output: {
    path: path.resolve(__dirname),
    filename: './dist/index.js'
  },
  stats: 'errors-only'
}
