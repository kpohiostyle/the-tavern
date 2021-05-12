import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class RacesService {
  async getRaces(query = {}) {
    const races = await dbContext.Races.find(query)
    return races
  }

  async createRace(body) {
    return await dbContext.Races.create(body)
  }

  async editRace(body) {
    const race = await dbContext.Races.findByIdAndUpdate({ _id: body.id }, body, { new: true })
    if (!race) {
      throw new BadRequest('Invalid request')
    }
    return race
  }
}
export const racesService = new RacesService()
