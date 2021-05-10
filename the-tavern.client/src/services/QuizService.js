import { AppState } from '../AppState'
import { api } from './AxiosService'

class QuizService {
  async getQuestions() {
    const quiz = await api.get('api/questions')
    AppState.quiz = quiz.data
    AppState.question = AppState.quiz[0]
    console.log(AppState.question)
    console.log(AppState.quiz)
  }

  // nextQuestion(num, str) {
  //   AppState.results[str]++
  //   if (num == 4) {
  //     for (let i = 0; i < 3; i++) {
  //     }
  //   }
  // }
}

export const quizService = new QuizService()
