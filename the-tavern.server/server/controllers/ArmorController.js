import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { armorService } from '../services/ArmorService'

export class ArmorController extends BaseController {
  constructor() {
    super('api/armor')
    this.router
      .get('', this.getArmor)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post('', this.createArmor)
      .put('/:id', this.editArmor)
      .use(Auth0Provider.getAuthorizedUserInfo)
  }

  async getArmor(req, res, next) {
    try {
      const data = await armorService.getArmor(req.query)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async createArmor(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      const data = await armorService.createArmor(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async editArmor(req, res, next) {
    try {
      req.body.id = req.params.id
      const data = await armorService.editArmor(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
