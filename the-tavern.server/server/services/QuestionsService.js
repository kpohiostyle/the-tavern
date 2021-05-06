import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class QuestionsService {
  async getQuestions(query) {
    const data = await dbContext.Questions.find(query)
    return data
  }

  async createQuestion(body) {
    return await dbContext.Questions.create(body)
  }

  // REVIEW questions are sub docs, so we will need to edit this function
  async editQuestion(body) {
    const question = await dbContext.Questions.findOneAndUpdate(body)
    if (!question) {
      throw new BadRequest('Invalid request')
    }
    return question
  }
}

export const questionsService = new QuestionsService()
