import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { jobsService } from '../services/JobsService'

export class JobsController extends BaseController {
  constructor() {
    super('api/jobs')
    this.router
      .get('/:id', this.getJob)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post('', this.createJob)
      .put('/:id', this.editJob)
      .use(Auth0Provider.getAuthorizedUserInfo)
  }

  async getJob(req, res, next) {
    try {
      const data = await jobsService.getJob(req.query)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async createJob(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      res.send(req.body)
    } catch (error) {
      next(error)
    }
  }

  async editJob(req, res, next) {
    try {
      req.body.id = req.params.id
      const data = await jobsService.editJob(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
