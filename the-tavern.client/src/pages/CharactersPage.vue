<template>
  <div class="home container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="row">
          <CharacterListComponent v-for="c in state.characters" :key="c.id" :character="c" />
        </div>
      </div>
      <div class="col-md-8 d-md-block d-none">
        <div v-if="state.activeCharacter">
          <ActiveCharacter />
        </div>
        <div v-else>
          <h1>Please select character to view details</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { charactersService } from '../services/CharactersService'
import Notification from '../utils/Notification'

export default {
  name: 'Characters',
  setup() {
    const state = reactive({
      characters: computed(() => AppState.characters),
      activeCharacter: computed(() => AppState.activeCharacter)
    })
    onMounted(async() => {
      try {
        await charactersService.getCharacters()
        console.log(AppState.characters)
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
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
 @media(min-width: 768px){

 }
</style>
