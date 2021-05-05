import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class JobsService {
  async find(query = {}) {
    const jobs = await dbContext.Jobs.find(query)
    return jobs
  }

  async findById(id) {
    const job = await dbContext.Jobs.findById(id)
    if (!job) {
      throw new BadRequest('Invalid Id')
    }
    return job
  }
}

export const jobsService = new JobsService()
