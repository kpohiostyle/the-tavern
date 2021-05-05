import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CharactersService {
  async find(query = {}) {
    const characters = await dbContext.Characters.find(query)
    return characters
  }

  async findById(id) {
    const character = await dbContext.Characters.findById(id)
    if (!character) {
      throw new BadRequest('Invalid Id')
    }
    return character
  }
}

export const charactersService = new CharactersService()
