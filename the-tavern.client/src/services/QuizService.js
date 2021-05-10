import { AppState } from '../AppState'
import router from '../router'
import { api } from './AxiosService'

class QuizService {
  async getQuestions() {
    const quiz = await api.get('api/questions')
    AppState.quiz = quiz.data
    AppState.question = AppState.quiz[0]
    console.log(AppState.question)
    console.log(AppState.quiz)
  }

  nextQuestion(str, num) {
    AppState.results[str]++
    if (num < 6) {
      if (AppState.results[str] > AppState.count.role) {
        AppState.count.role = AppState.results[str]
        AppState.character.role = str
      }
    } else {
      if (AppState.results[str] > AppState.count.style) {
        AppState.count.style = AppState.results[str]
        AppState.character.style = str
      }
    }
    console.log(AppState.character)
    if (num === 4 || num === 9) {
      this.checkResults(num)
    } else if (num === 10) {
      router.push('Results')
    } else {
      AppState.question = AppState.quiz[num + 1]
    }
  }

  checkResults(num) {
    const refined = []
    let a = 0
    let b = 4
    let count = AppState.count.role
    if (num === 9) {
      a = 4
      b = 7
      count = AppState.count.style
    }
    for (let i = a; i < b; i++) {
      if (AppState.results[AppState.resultsArr[i]] === count) {
        refined.push(AppState.resultsArr[i])
      }
    }
    if (refined.length === 2) {
      this.clarifyQuestion(num, refined)
    } else if (num === 4) {
      AppState.question = AppState.quiz[num + 2]
    } else {
      router.push('Results')
    }
  }

  clarifyQuestion(num, arr) {
    const temp = AppState.quiz[num + 1]
    temp.answers = temp.answers.filter(a => a.value === arr[0] || a.value === arr[1])
    AppState.question = temp
  }

  resetResults() {
    AppState.results = {
      tank: 0,
      damage: 0,
      support: 0,
      utility: 0,
      weapons: 0,
      spells: 0,
      balance: 0
    }
  }
}

export const quizService = new QuizService()
