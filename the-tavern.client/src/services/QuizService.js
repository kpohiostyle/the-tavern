import { AppState } from '../AppState'
import router from '../router'
import { api } from './AxiosService'
import { resultsService } from './ResultsService'

class QuizService {
  async getQuestions() {
    // TODO rename quiz to res (question to res.data)
    const quiz = await api.get('api/questions')
    AppState.quiz = quiz.data
    AppState.question = AppState.quiz[0]
  }

  async nextQuestion(str, num) {
    // FIXME abstract logic DOM manipulation in service == bad
    const string = str.toLowerCase()
    AppState.results[string]++
    if (num < 6) {
      if (AppState.results[string] > AppState.count.role) {
        AppState.count.role = AppState.results[string]
        AppState.character.role = str
      }
    } else if (num > 10) {
      quizService.jobSpecifics(str, num)
    } else {
      if (AppState.results[string] > AppState.count.style) {
        AppState.count.style = AppState.results[string]
        AppState.character.style = str
      }
    }
    if (num === 4 || num === 9) {
      this.checkResults(num)
    } else if (num === 10) {
      await this.jobQuestion()
    } else {
      if (num === 5) {
        // NOTE hides progress bars
        document.getElementById('tank').classList.add('d-none')
        document.getElementById('damage').classList.add('d-none')
        document.getElementById('support').classList.add('d-none')
        document.getElementById('utility').classList.add('d-none')
        document.getElementById(AppState.character.role.toLowerCase()).classList.remove('d-none')
        document.getElementById('style').classList.remove('d-none')
      }
      AppState.question = AppState.quiz[num + 1]
    }
  }

  async checkResults(num) {
    // REVIEW do we need this? Rename?
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
      if (AppState.results[AppState.resultsArr[i].toLowerCase()] === count) {
        refined.push(AppState.resultsArr[i])
      }
    }
    if (refined.length === 2) {
      this.clarifyQuestion(num, refined)
    } else if (num === 4) {
      document.getElementById('tank').classList.add('d-none')
      document.getElementById('damage').classList.add('d-none')
      document.getElementById('support').classList.add('d-none')
      document.getElementById('utility').classList.add('d-none')
      document.getElementById(AppState.character.role.toLowerCase()).classList.remove('d-none')
      document.getElementById('style').classList.remove('d-none')
      AppState.question = AppState.quiz[num + 2]
    } else {
      await this.jobQuestion()
    }
  }

  clarifyQuestion(num, arr) {
    // REVIEW rename to limit options? (tiebreaker only)
    const temp = AppState.quiz[num + 1]
    temp.answers = temp.answers.filter(a => a.value === arr[0] || a.value === arr[1])
    AppState.question = temp
  }

  async jobQuestion() {
    // FIXME DOM manipulation
    const res = AppState.jobs.find(j => j.role === AppState.character.role && j.style === AppState.character.style)
    await resultsService.getJob(res.title)
    const job = AppState.job
    AppState.quiz[11].answers = job.races
    AppState.quiz[12].answers = job.backgrounds
    AppState.quiz[13] = job.subChoices
    AppState.question = AppState.quiz[11]
    document.getElementById('weapons').classList.add('d-none')
    document.getElementById('spells').classList.add('d-none')
    document.getElementById('balance').classList.add('d-none')
    document.getElementById(AppState.character.style.toLowerCase()).classList.remove('d-none')
  }

  async jobSpecifics(str, num) {
    if (num === 11) {
      await resultsService.getRace(str)
      AppState.question = AppState.quiz[num + 1]
    } else if (num === 12) {
      await resultsService.getBackground(str)
      router.push('Results')
    }
  }

  resetResults() {
    // REVIEW put in a single place and reference (set a default)
    AppState.results = {
      tank: 0,
      damage: 0,
      support: 0,
      utility: 0,
      weapons: 0,
      spells: 0,
      balance: 0
    }
    AppState.count = {
      role: 0,
      style: 0
    }
  }
}

export const quizService = new QuizService()
