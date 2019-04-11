import Express from 'express'
import { APP_HOST, APP_PORT } from '../constants'

export default (app: Express.Application) => {
  app.listen(APP_PORT, APP_HOST, (err: Express.Errback) => {
    if (err) throw err
    console.log(`Running on http://${APP_HOST}:${APP_PORT}`)
  })
}
