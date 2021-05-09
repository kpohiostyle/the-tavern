import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { weaponsService } from '../services/WeaponsService'

export class WeaponsController extends BaseController {
  constructor() {
    super('api/weapons')
    this.router
      .get('', this.getWeapons)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post('', this.createWeapon)
      .put('/:id', this.editWeapon)
      .use(Auth0Provider.getAuthorizedUserInfo)
  }

  async getWeapons(req, res, next) {
    try {
      const data = await weaponsService.getWeapons(req.query)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async createWeapon(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      const data = await weaponsService.createWeapon(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async editWeapon(req, res, next) {
    try {
      req.body.id = req.params.id
      const data = await weaponsService.editWeapon(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
