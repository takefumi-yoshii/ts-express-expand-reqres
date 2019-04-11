// @ts-ignore
import RedisServer from 'redis-server'
import { REDIS_HOST, REDIS_PORT } from '../constants'

const server = new RedisServer(REDIS_PORT)

server.open((err: any) => {
  if (err === null) {
    console.log(`Running on http://${REDIS_HOST}:${REDIS_PORT}`)
  } else {
    console.log(err)
  }
})
