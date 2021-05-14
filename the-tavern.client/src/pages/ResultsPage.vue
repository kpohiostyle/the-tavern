<template>
  <div class="results container-fluid">
    <div class="row justify-content-center" v-if="!state.loading">
      <div class="col-md-8 col-12 p-md-5">
        <div class="shadow bg-light text-center m-3 p-md-5 p-4">
          <h2><u> You have selected a {{ state.character.race }} {{ state.character.job }}!</u> </h2>

          <div v-if="state.skills < state.job.proficiencies.skills.choose">
            <h3>Choose {{ state.job.proficiencies.skills.choose }} of your available Skills!</h3>
            <div class="row justify-content-center">
              <SkillsComponent v-for="s in state.job.proficiencies.skills.from" :key="s" :skill-prop="s" />
            </div>
          </div>
          <div v-else-if="state.equipment < state.job.equipment[0].choices.length">
            <h3>Choose from these sets of available Equipment!</h3>
            <div>
              <ChoicesComponent v-for="(c, key) in state.job.equipment[0].choices" :key="key" :choice-prop="c" :index-prop="key" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 d-md-block d-none bg-primary p-5 pt-5">
        <div class="shadow bg-light text-center m-3 p-5">
          <h2><u>Character Profile</u></h2>
          <h3>Party Role: {{ state.character.role }}</h3>
          <h3>Play Style: {{ state.character.style }}</h3>
          <h3>Race: {{ state.character.race }}</h3>
          <h3>Class: {{ state.character.job }}</h3>
          <h3>Sub-Class: {{ state.character.subJob }}</h3>
          <h3>Background: {{ state.character.background }}</h3>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-primary" @click="saveCharacter">
      Save
    </button>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { charactersService } from '../services/CharactersService'
import Notification from '../utils/Notification'

export default {
  name: 'Results',
  setup() {
    const state = reactive({
      loading: true,
      character: computed(() => AppState.character),
      job: computed(() => AppState.job),
      skills: computed(() => AppState.count.skills),
      equipment: computed(() => AppState.count.equipment)
    })
    onMounted(async() => {
      charactersService.createCharacter()
      charactersService.getSkills()
      state.loading = false
    })
    return {
      state,
      user: computed(() => AppState.user),
      async saveCharacter() {
        try {
          await charactersService.saveCharacter(state.character)
        } catch (error) {
          Notification.toast('Error' + error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
 h2 {
   font-size: 2.5rem;
 }
 p {
   font-size: 2rem;
 }

 button {
   font-size: 1.5rem;
 }
</style>
