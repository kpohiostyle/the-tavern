import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BackgroundsService {
  async getAllBackgrounds(query = {}) {
    const backgrounds = await dbContext.Backgrounds.find(query)
    return backgrounds
  }

  async getBackground(query) {
    const background = await dbContext.Backgrounds.findOne({ role: query.role, style: query.style })
    if (!background) {
      throw new BadRequest('Invalid Query')
    }
    return background
  }

  async createBackground(body) {
    return await dbContext.Backgrounds.create(body)
  }

  async editBackground(body) {
    const background = await dbContext.Backgrounds.findByIdAndUpdate({ _id: body.id }, body, { new: true })
    if (!background) {
      throw new BadRequest('Invalid request')
    }
    return background
  }
}
export const backgroundsService = new BackgroundsService()
