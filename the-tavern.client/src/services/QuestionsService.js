import { AppState } from '../AppState'
import router from '../router'
import { api } from './AxiosService'
import { resultsService } from './ResultsService'

class QuestionsService {
  async getQuestions() {
    // TODO rename question to res (question to res.data)
    const res = await api.get('api/questions')
    AppState.questions.role = res.data.filter(q => q.type === 'Role')
    AppState.questions.style = res.data.filter(q => q.type === 'Style')
    AppState.questions.trade = res.data.filter(q => q.type === 'Race' || q.type === 'Background')

    AppState.activeQuestion = AppState.questions.role[0]
  }

  // async nextQuestion(str, num) {
  //   // FIXME abstract logic DOM manipulation in service == bad
  //   const string = str.toLowerCase()
  //   AppState.results[string]++
  //   if (num < 6) {
  //     if (AppState.results[string] > AppState.count.role) {
  //       AppState.count.role = AppState.results[string]
  //       AppState.character.role = str
  //     }
  //   } else if (num > 10) {
  //     questionService.jobSpecifics(str, num)
  //   } else {
  //     if (AppState.results[string] > AppState.count.style) {
  //       AppState.count.style = AppState.results[string]
  //       AppState.character.style = str
  //     }
  //   }
  //   if (num === 4 || num === 9) {
  //     this.checkResults(num)
  //   } else if (num === 10) {
  //     await this.jobQuestion()
  //   } else {
  //     if (num === 5) {
  //       // NOTE hides progress bars
  //       document.getElementById('tank').classList.add('d-none')
  //       document.getElementById('damage').classList.add('d-none')
  //       document.getElementById('support').classList.add('d-none')
  //       document.getElementById('utility').classList.add('d-none')
  //       document.getElementById(AppState.character.role.toLowerCase()).classList.remove('d-none')
  //       document.getElementById('style').classList.remove('d-none')
  //     }
  //     AppState.question = AppState.question[num + 1]
  //   }
  // }
  // async checkResults(num) {
  //   // REVIEW do we need this? Rename?
  //   const refined = []
  //   let a = 0
  //   let b = 4
  //   let count = AppState.count.role
  //   if (num === 9) {
  //     a = 4
  //     b = 7
  //     count = AppState.count.style
  //   }
  //   for (let i = a; i < b; i++) {
  //     if (AppState.results[AppState.resultsArr[i].toLowerCase()] === count) {
  //       refined.push(AppState.resultsArr[i])
  //     }
  //   }
  //   if (refined.length === 2) {
  //     this.clarifyQuestion(num, refined)
  //   } else if (num === 4) {
  //     document.getElementById('tank').classList.add('d-none')
  //     document.getElementById('damage').classList.add('d-none')
  //     document.getElementById('support').classList.add('d-none')
  //     document.getElementById('utility').classList.add('d-none')
  //     document.getElementById(AppState.character.role.toLowerCase()).classList.remove('d-none')
  //     document.getElementById('style').classList.remove('d-none')
  //     AppState.question = AppState.question[num + 2]
  //   } else {
  //     await this.jobQuestion()
  //   }
  // }
  // clarifyQuestion(num, arr) {
  //   // REVIEW rename to limit options? (tiebreaker only)
  //   const temp = AppState.question[num + 1]
  //   temp.answers = temp.answers.filter(a => a.value === arr[0] || a.value === arr[1])
  //   AppState.question = temp
  // }
  // async jobQuestion() {
  //   // FIXME DOM manipulation
  //   const res = AppState.jobs.find(j => j.role === AppState.character.role && j.style === AppState.character.style)
  //   await resultsService.getJob(res.title)
  //   const job = AppState.job
  //   AppState.question[11].answers = job.races
  //   AppState.question[12].answers = job.backgrounds
  //   AppState.question[13] = job.subChoices
  //   AppState.question = AppState.question[11]
  //   document.getElementById('weapons').classList.add('d-none')
  //   document.getElementById('spells').classList.add('d-none')
  //   document.getElementById('balance').classList.add('d-none')
  //   document.getElementById(AppState.character.style.toLowerCase()).classList.remove('d-none')
  // }
  // async jobSpecifics(str, num) {
  //   if (num === 11) {
  //     await resultsService.getRace(str)
  //     AppState.question = AppState.question[num + 1]
  //   } else if (num === 12) {
  //     await resultsService.getBackground(str)
  //     router.push('Results')
  //   }
  // }
  // resetResults() {
  //   // REVIEW put in a single place and reference (set a default)
  //   AppState.results = {
  //     tank: 0,
  //     damage: 0,
  //     support: 0,
  //     utility: 0,
  //     weapons: 0,
  //     spells: 0,
  //     balance: 0
  //   }
  //   AppState.count = {
  //     role: 0,
  //     style: 0
  //   }
  // }

  async buildCharacter(string, type) {
    if (type === 'Role' || type === 'Style') {
      await this.buildPrimary(string, type)
    } else {
      await this.buildSecondary(string, type)
    }
  }

  async buildPrimary(string, type) {
    this.updateCount(string, type)
    const t = type.toLowerCase()
    const questions = AppState.questions
    if (AppState.tieBreakers.length === 2) {
      this.tieBreaker(type, AppState.tieBreakers)
    } else if (AppState.activeQuestion.number === questions[t].length - 1) {
      if (type === 'Role') {
        AppState.activeQuestion = questions.style[0]
        AppState.count.question = 5
      } else {
        await resultsService.getJob()
        AppState.activeQuestion = questions.trade[0]
        AppState.count.question = 8
      }
      AppState.tieBreakers = []
    } else {
      AppState.count.question++
      AppState.activeQuestion = questions[t][AppState.activeQuestion.number + 1]
    }
  }

  async buildSecondary(string, type) {
    const questions = AppState.questions
    if (type === 'Race') {
      await resultsService.getRace(string)
    } else if (type === 'Background') {
      await resultsService.getBackground(string)
    } else if (type === 'SubJob') {
      AppState.job.subJobs = AppState.job.subJobs.find(j => j.title === string)
    }
    if (AppState.activeQuestion.number === questions.trade.length - 1) {
      router.push('Results')
    } else {
      AppState.count.question++
      AppState.activeQuestion = questions.trade[AppState.activeQuestion.number + 1]
    }
  }

  updateCount(string, type) {
    // eslint-disable-next-line prefer-const
    const t = type.toLowerCase()
    const str = string.toLowerCase()
    AppState.attributes[t][str]++
    const attribute = AppState.attributes[t][str]
    const questions = AppState.questions[t]
    if (AppState.count[t] < attribute) {
      AppState.count[t] = attribute
      AppState.character[t] = string
    }
    if (attribute === 2) {
      AppState.tieBreakers.push(string)
    }
    if (attribute === 3 || AppState.activeQuestion === questions[questions.length - 2]) {
      AppState.count.question++
      AppState.activeQuestion = questions[questions.length - 1]
    }
  }

  tieBreaker(type, arr) {
    const t = type.toLowerCase()
    const questions = AppState.questions[t]
    AppState.count.question++
    AppState.activeQuestion = questions[questions.length - 1]
    AppState.activeQuestion.answers = AppState.activeQuestion.answers.filter(a => a.value === arr[0] || a.value === arr[1])
    AppState.tieBreakers = []
  }

  resetAttributes() {
    // REVIEW put in a single place and reference (set a default)
    AppState.attributes = {
      role: {
        tank: 0,
        damage: 0,
        support: 0,
        utility: 0
      },
      style: {
        weapons: 0,
        spells: 0,
        balance: 0
      }
    }
    AppState.count = {
      role: 0,
      style: 0,
      question: 0,
      skills: 0,
      equipment: 0,
      mods: 0,
      modChoice: 0,
      score: 0
    }
    AppState.tieBreakers = []
    AppState.activeScores = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    }
    AppState.activeScore = 0
  }
}

export const questionsService = new QuestionsService()
