import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { questionsService } from '../services/QuestionsService'

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
      const data = await questionsService.getQuestions(req.query)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async createQuestion(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      const data = await questionsService.createQuestion(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async editQuestion(req, res, next) {
    try {
      req.body.id = req.params.id
      const data = await questionsService.editQuestion(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
