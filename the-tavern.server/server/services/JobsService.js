import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class JobsService {
  async getJobs(query = {}) {
    const res = await dbContext.Jobs.find(query)
    if (!res) {
      throw new BadRequest('Invalid Query')
    }
    return res
  }

  async createJob(body) {
    return await dbContext.Jobs.create(body)
  }

  async editJob(body) {
    const job = await dbContext.Jobs.findByIdAndUpdate({ _id: body.id }, body, { new: true })
    if (!job) {
      throw new BadRequest('Invalid request')
    }
    return job
  }
}
export const jobsService = new JobsService()
