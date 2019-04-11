import 'express'

declare global {
  namespace Express {
    interface SessionData {
      count?: number
    }
  }
}
