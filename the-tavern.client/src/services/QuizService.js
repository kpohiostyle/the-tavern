import { AppState } from '../AppState'
import { api } from './AxiosService'

class QuizService {
  async getQuestions() {
    const quiz = await api.get('api/questions')
    AppState.quiz = quiz.data
    AppState.question = AppState.quiz[0]
  }

  // nextQueston(num, answer) {
  //   AppState.results[answer]++
  //   if (num == 4) {
  //     for (let i = 0; i < 3; i++) {
  //     }
  //   }
  // }
}

export const quizService = new QuizService()
