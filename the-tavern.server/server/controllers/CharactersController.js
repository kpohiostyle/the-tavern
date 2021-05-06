import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class CharactersController extends BaseController {
  constructor() {
    super('api/characters')
    this.router
      .get('', this.getCharacters)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post('', this.createCharacter)
      .put('', this.editMyCharacter)
      .delete('/:id', this.deleteMyCharacter)
      .use(Auth0Provider.getAuthorizedUserInfo)
  }

  async getCharacters(req, res, next) {
    try {
      return res.send(['character1', 'character2'])
    } catch (error) {
      next(error)
    }
  }

  // async create(req, res, next) {
  //   try {
  //     // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
  //     req.body.creatorId = req.userInfo.id
  //     res.send(req.body)
  //   } catch (error) {
  //     next(error)
  //   }
  // }
}
