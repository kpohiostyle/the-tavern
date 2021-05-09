import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class WeaponsService {
  async getWeapons(query) {
    const data = await dbContext.Weapons.find(query)
    return data
  }

  async createWeapon(body) {
    return await dbContext.Weapons.create(body)
  }

  // REVIEW weapons are sub docs, so we will need to edit this function
  async editWeapon(body) {
    const weapon = await dbContext.Weapons.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!weapon) {
      throw new BadRequest('Invalid request')
    }
    return weapon
  }
}

export const weaponsService = new WeaponsService()
