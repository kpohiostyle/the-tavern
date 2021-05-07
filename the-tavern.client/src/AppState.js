import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  quiz: [],
  question: {
    number: 0,
    query: 'What color is the sky?',
    answers: [
      {
        body: 'The sky is blue!',
        value: 'Blue'
      },
      {
        body: 'The sky is green!',
        value: 'Green'
      },
      {
        body: 'The sky is red!',
        value: 'Red'
      }
    ]
  },
  results: {
    tank: 0,
    damage: 0,
    support: 0,
    utility: 0,
    weapons: 0,
    spells: 0,
    balance: 0
  },
  character: {
    job: 'paladin',
    race: 'halfling'
  },
  rawData: []
})
