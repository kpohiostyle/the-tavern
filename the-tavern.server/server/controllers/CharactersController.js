import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { charactersService } from '../services/CharactersService'

export class CharactersController extends BaseController {
  constructor() {
    super('api/characters')
    this.router
    // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .put('', this.editCharacter)
      .post('', this.createCharacter)
      .get('', this.getCharacters)
      .delete('/:id', this.deleteCharacter)
  }

  async getCharacters(req, res, next) {
    try {
      const data = await charactersService.getCharacters(req.query)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async createCharacter(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorId = req.userInfo.id
      const data = await charactersService.createCharacter(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async editCharacter(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.id = req.params.id
      const data = await charactersService.editCharacter(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async deleteCharacter(req, res, next) {
    try {
      const data = await charactersService.deleteCharacter(req.params.id, req.userInfo.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
