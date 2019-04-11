import Express from 'express'
import createError from 'http-errors'

export default (app: Express.Application) => {
  // ______________________________________________________
  //
  // session.count 初期化 middleWare
  //
  app.use((req, res, next) => {
    if (req.session !== undefined) {
      if (req.session.count === undefined || req.session.count === null) {
        req.session.count = 0
      }
    }
    next()
  })
  // ______________________________________________________
  //
  // 画面表示用 ルート・ハンドラー
  //
  app.get('/', (req, res, next) => {
    if (req.session) {
      if (req.session.count === undefined) return
      const data: { count: number } = { count: req.session.count }
      res.render('index.ejs', data)
      return
    }
    next(createError(401))
  })
  // ______________________________________________________
  //
  // 「ping」ボタン押下時の リクエストハンドラー
  //
  app.get('/ping', (req, res, next) => {
    if (req.session) {
      if (req.session.count !== undefined) {
        req.session.count++
        // res.send のスキーマが制約されている
        res.send({ count: req.session.count })
        return
      }
    }
    next(createError(401))
  })
}
