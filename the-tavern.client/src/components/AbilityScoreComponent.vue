<template>
  <div class="row">
    <div class="DiceImg col-12 text-center" v-if="state.bool">
      <i class="fas fa-dice-five fa-10x text-lights my-4" @click=" diceRoll()"></i>
      <h3>Click the dice to generate your ability scores below:</h3>
    </div>
    <div class="DiceImg col-12 text-center" v-else>
      <i class="fas fa-dice-d20 text-warning fa-10x my-4"></i>
      <h3 v-if="state.score < 6">
        Drag the numbers to your ideal Ability Scores to assign them!
      </h3>
      <h2 v-else>
        Click the dice above to Save your Scores
      </h2>
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

export default {
  name: 'AbilityScore',
  setup() {
    const state = reactive({
      bool: true,
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
        console.log(AppState.abilityScore, AppState.activeScores)
        state.bool = false
      }
    }
  }
}
</script>

<style>

</style>
