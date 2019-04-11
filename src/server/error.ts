import Express from 'express'
import createError, { HttpError } from 'http-errors'

export default (app: Express.Application) => {
  app.use((req, res, next) => {
    res.render('404.ejs')
    next(createError(404))
  })
  app.use(
    (
      err: HttpError,
      req: Express.Request,
      res: Express.Response,
      next: Express.NextFunction
    ) => {
      console.log(err.statusCode)
    }
  )
}
