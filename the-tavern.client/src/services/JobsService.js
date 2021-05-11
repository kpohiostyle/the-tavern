import { AppState } from '../AppState'
import { api } from './AxiosService'

class JobsService {
  async getJob(job) {
    const res = await api.get(`api/jobs?title=${job.title}`)
    AppState.job = res.data[0]
    console.log(AppState.job)
  }
}

export const jobsService = new JobsService()
