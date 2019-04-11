const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client',
    './src/client/index.ts'
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(path.join(__dirname, 'src/public')),
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ],
  output: {
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [{ loader: 'ts-loader' }],
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.ts' ],
  }
}
