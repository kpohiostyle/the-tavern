import { AppState } from '../AppState'
import { api } from './AxiosService'

class ResultsService {
  async getJob(title) {
    const res = await api.get(`api/jobs?title=${title}`)
    AppState.job = res.data[0]
    console.log(AppState.job)
  }

  async getRace(title) {
    const res = await api.get(`api/races?title=${title}`)
    AppState.race = res.data[0]
    console.log(AppState.race)
  }

  async getBackground(title) {
    const res = await api.get(`api/backgrounds?title=${title}`)
    AppState.background = res.data[0]
    console.log(AppState.background)
  }
}

export const resultsService = new ResultsService()
