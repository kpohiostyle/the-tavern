import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { backgroundsService } from '../services/BackgroundsService'

export class BackgroundsController extends BaseController {
  constructor() {
    super('api/backgrounds')
    this.router
      .get('', this.getAllBackgrounds)
      .get('', this.getBackground)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post('', this.createBackground)
      .put('/:id', this.editBackground)
      .use(Auth0Provider.getAuthorizedUserInfo)
  }

  async getAllBackgrounds(req, res, next) {
    try {
      const backgrounds = await backgroundsService.getAllBackgrounds(req.query)
      return res.send(backgrounds)
    } catch (error) {
      next(error)
    }
  }

  async getBackground(req, res, next) {
    try {
      const data = await backgroundsService.getBackground(req.query)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async createBackground(req, res, next) {
    try {
      const background = await backgroundsService.createBackground(req.body)
      res.send(background)
    } catch (error) {
      next(error)
    }
  }

  async editBackground(req, res, next) {
    try {
      req.body.id = req.params.id
      const data = await backgroundsService.editBackground(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
