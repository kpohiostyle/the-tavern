import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CharactersService {
  async getCharacters(query) {
    const characters = await dbContext.Characters.find(query)
    return characters
  }

  async createCharacter(body) {
    return await dbContext.Characters.create(body)
  }

  async editCharacter(body) {
    const character = await dbContext.Characters.findOneAndUpdate({ _id: body.id, creatorId: body.creatorId }, body, { new: true })
    if (!character) {
      throw new BadRequest('Invalid request')
    }
    return character
  }

  async deleteCharacter(id, userId) {
    const data = await dbContext.Characters.findOneAndDelete({ _id: id, creatorId: userId })
    if (!data) {
      throw new BadRequest('Invalid Character')
    }
    return data
  }
}

export const charactersService = new CharactersService()
