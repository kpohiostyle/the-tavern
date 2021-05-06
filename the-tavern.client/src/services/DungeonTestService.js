import { AppState } from '../AppState'
import { dungeonApi } from './AxiosService'

class DungeonTestService {
  async getCharacter(character) {
    const job = await dungeonApi.get(`classes/${character.job}`)
    const race = await dungeonApi.get(`races/${character.race}`)
    const abilities = await dungeonApi.get(`classes/${character.job}/levels/1`)
    AppState.rawData.push(job, race, abilities)
  }
}

export const dungeonTestService = new DungeonTestService()
