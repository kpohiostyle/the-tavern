import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class QuestionsService {
  async find(query = {}) {
    const questions = await dbContext.Questions.find(query)
    return questions
  }

  async findById(id) {
    const question = await dbContext.Questions.findById(id)
    if (!question) {
      throw new BadRequest('Invalid Id')
    }
    return question
  }
}

export const questionsService = new QuestionsService()
