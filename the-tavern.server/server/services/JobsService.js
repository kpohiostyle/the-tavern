import { dbContext } from '../db/DbContext'

class JobsService {
  async getJob(query) {
    const job = await dbContext.Jobs.findOne({ role: query.role, style: query.style })
    return job
  }

  async createJob(body) {
    return await dbContext.Jobs.create(body)
  }
}

export const jobsService = new JobsService()
