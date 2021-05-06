import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class QuestionsController extends BaseController {
  constructor() {
    super('api/questions')
    this.router
      .get('', this.getQuestions)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post('', this.createQuestion)
      .put('/:id', this.editQuestion)
      .use(Auth0Provider.getAuthorizedUserInfo)
  }

  async getQuestions(req, res, next) {
    try {
      return res.send(['question1', 'question2'])
    } catch (error) {
      next(error)
    }
  }

  async createQuestion(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorId = req.userInfo.id
      res.send(req.body)
    } catch (error) {
      next(error)
    }
  }
}
