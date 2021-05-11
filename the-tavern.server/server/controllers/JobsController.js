import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { jobsService } from '../services/JobsService'

export class JobsController extends BaseController {
  constructor() {
    super('api/jobs')
    this.router
      .get('', this.getJobs)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post('', this.createJob)
      .put('/:id', this.editJob)
      .use(Auth0Provider.getAuthorizedUserInfo)
  }

  async getJobs(req, res, next) {
    try {
      const jobs = await jobsService.getJobs(req.query)
      return res.send(jobs)
    } catch (error) {
      next(error)
    }
  }

  async createJob(req, res, next) {
    try {
      const job = await jobsService.createJob(req.body)
      res.send(job)
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
