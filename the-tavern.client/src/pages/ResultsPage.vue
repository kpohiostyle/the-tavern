<template>
  <div class="results container-fluid">
    <div class="row justify-content-center" v-if="!state.loading">
      <div class="col-md-8 col-12 p-md-5">
        <div class="shadow bg-light text-center m-3 p-md-5 p-4">
          <h2><u>Test Results</u></h2>
          <h3>You have selected a {{ state.character.race }} {{ state.character.job }} </h3>
          <h4>Cantrips:{{ state.character.cantrips }}</h4>
          <h4>Spells:{{ state.character.spells }}</h4>
          <h1>BITE ME!!!!!!</h1>
        </div>
      </div>
      <div class="col-4 d-md-block d-none bg-primary p-5 pt-5">
        <div class="shadow bg-light text-center m-3 p-5">
          <h2><u>Character Profile</u></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { charactersService } from '../services/CharactersService'

export default {
  name: 'Results',
  setup() {
    const state = reactive({
      loading: true,
      character: computed(() => AppState.character)
    })
    onMounted(async() => {
      charactersService.createCharacter()
      state.loading = false
    })
    return {
      state
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
