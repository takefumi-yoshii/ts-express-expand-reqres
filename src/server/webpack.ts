import Express from 'express'
const webpack = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const config = require('../../webpack.config')
const compiler = webpack(config)

export default (app: Express.Application) => {
  if (process.env.NODE_ENV !== 'production') {
    app.use(hotMiddleware(compiler))
    app.use(
      devMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
      })
    )
  }
}
