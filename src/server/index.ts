import Express from 'express'
import config from './config'
import session from './session'
import webpack from './webpack'
import routes from './routes'
import error from './error'
import listen from './listen'

const app = Express()

config(app) // Express サーバーの基本的な設定をします
session(app) // Session middleWare（Redis クライアント）の設定をします
webpack(app) // webpack middlwWare の設定をします
routes(app) // ルート・ハンドラーを記述します
error(app) // エラーログなどの設定を記述します
listen(app) // サーバーを起動します
