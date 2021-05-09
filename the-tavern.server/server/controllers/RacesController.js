import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { racesService } from '../services/RacesService'

export class RacesController extends BaseController {
  constructor() {
    super('api/races')
    this.router
      .get('', this.getAllRaces)
      .get('', this.getRace)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post('', this.createRace)
      .put('/:id', this.editRace)
      .use(Auth0Provider.getAuthorizedUserInfo)
  }

  async getAllRaces(req, res, next) {
    try {
      const races = await racesService.getAllRaces(req.query)
      return res.send(races)
    } catch (error) {
      next(error)
    }
  }

  async getRace(req, res, next) {
    try {
      const data = await racesService.getRace(req.query)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async createRace(req, res, next) {
    try {
      const race = await racesService.createRace(req.body)
      res.send(race)
    } catch (error) {
      next(error)
    }
  }

  async editRace(req, res, next) {
    try {
      req.body.id = req.params.id
      const data = await racesService.editRace(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
