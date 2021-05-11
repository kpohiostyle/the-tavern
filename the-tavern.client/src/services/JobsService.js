import { AppState } from '../AppState'
import { api } from './AxiosService'

class JobsService {
  async getJob(query) {
    const res = await api.get(`api/jobs/${query}`)
    AppState.job = res.data
    console.log(res)
  }
}

export const jobsService = new JobsService()
