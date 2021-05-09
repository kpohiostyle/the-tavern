import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class ArmorService {
  async getArmor(query) {
    const data = await dbContext.Armor.find(query)
    return data
  }

  async createArmor(body) {
    return await dbContext.Armor.create(body)
  }

  // REVIEW armor are sub docs, so we will need to edit this function
  async editArmor(body) {
    const armor = await dbContext.Armor.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!armor) {
      throw new BadRequest('Invalid request')
    }
    return armor
  }
}

export const armorService = new ArmorService()
