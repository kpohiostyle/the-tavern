import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class JobsController extends BaseController {
  constructor() {
    super('api/jobs')
    this.router
      .get('', this.getJob)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post('', this.createJob)
      .put('/:id', this.editJobs)
      .use(Auth0Provider.getAuthorizedUserInfo)
  }

  async getJobs(req, res, next) {
    try {
      return res.send(['job1', 'job2'])
    } catch (error) {
      next(error)
    }
  }

  async createJobs(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorId = req.userInfo.id
      res.send(req.body)
    } catch (error) {
      next(error)
    }
  }
}
