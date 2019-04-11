import path from 'path'
import Express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

export default (app: Express.Application) => {
  const publicDir = path.join(__dirname, '../public')
  const clientDir = path.join(__dirname, '../client')

  // 静的ファイルのホスティングディレクトリ指定
  app.use(Express.static(publicDir))
  // View に ejs を利用することを宣言
  app.set('view engine', 'ejs')
  // .ejs が置かれるディレクトリ指定
  app.set('views', clientDir)

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(cookieParser())
}
