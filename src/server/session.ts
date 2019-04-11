import Express from 'express'
import session from 'express-session'
import connectRedis from 'connect-redis'
import { REDIS_HOST, REDIS_PORT } from '../constants'

export default (app: Express.Application) => {
  const RedisStore = connectRedis(session)
  const option = {
    store: new RedisStore({
      host: REDIS_HOST,
      port: REDIS_PORT
    }),
    secret: 'keyboard cat',
    resave: false
  }
  app.use(session(option))
}
