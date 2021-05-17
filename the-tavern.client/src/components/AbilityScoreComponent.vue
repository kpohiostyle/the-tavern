<template>
  <div class="row">
    <div class="DiceImg col-12 text-center" v-if="state.bool">
      <h3>Now you just need to roll your Ability Scores!</h3>
      <i class="fas fa-dice-five fa-10x text-warning my-4" @click=" diceRoll()"></i>
      <h3>Click the dice to generate your ability scores below:</h3>
    </div>
    <div class="DiceImg col-12 text-center" v-else-if="state.score < 6">
      <i class="fas fa-dice-d20 text-danger fa-10x my-4"></i>
      <h3>Drag the numbers to your ideal Ability Scores to assign them!</h3>
    </div>
    <div class="DiceImg col-12 text-center" v-else>
      <h3>
        Congratulations!<br>Click the dice below to save your Character!
      </h3>
      <i class="fas fa-dice-d20 text-success fa-10x my-4" @click="saveCharacter"></i>
    </div>
  </div>
  <div class="row" v-if="state.score < 6">
    <DiceNum v-for="(d, key) in state.activeScores" :key="key" :dice-props="d" :index-prop="key" />
  </div>

  <div class="row mt-2 text-center">
    <StatsComponent v-for="(s, key) in state.characterScores" :key="key" :stat-prop="s" />
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
import { charactersService } from '../services/CharactersService'
import Notification from '../utils/Notification'

export default {
  name: 'AbilityScore',
  setup() {
    const state = reactive({
      bool: true,
      spin: true,
      character: computed(() => AppState.character),
      abilityScore: computed(() => AppState.abilityScore),
      activeScores: computed(() => AppState.activeScores),
      characterScores: computed(() => AppState.characterScores),
      score: computed(() => AppState.count.score)
    })
    return {
      state,
      diceRoll() {
        const finalRolls = []
        for (let i = 0; i < 6; i++) {
          const subRolls = []
          for (let j = 0; j < 4; j++) {
            const num = Math.floor(Math.random() * 6 + 1)
            subRolls.push(num)
          }
          subRolls.sort((a, b) => b - a)
          subRolls.pop()
          finalRolls.push(subRolls.reduce((a, v) => { return a + v }, 0))
        }
        AppState.abilityScore.push(...finalRolls)
        for (let i = 0; i < AppState.abilityScore.length; i++) {
          AppState.activeScores[i] = AppState.abilityScore[i]
        }
        state.bool = false
      },
      async saveCharacter() {
        try {
          await Notification.multiModal()
          await charactersService.saveCharacter(state.character)
        } catch (error) {
          Notification.toast('Error' + error, 'error')
        }
      }
    }
  }
}
</script>

<style>

</style>
