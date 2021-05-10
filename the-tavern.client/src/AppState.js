import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  quiz: [],
  question: {},
  resultsArr: ['tank', 'damage', 'support', 'utility', 'weapons', 'spells', 'balance'],
  results: {
    tank: 0,
    damage: 0,
    support: 0,
    utility: 0,
    weapons: 0,
    spells: 0,
    balance: 0
  },
  character: {},
  rawData: []
})
