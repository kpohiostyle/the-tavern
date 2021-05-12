<template>
  <div class="home container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="row">
          <!-- <CharacterListComponent v-for="character in state.characters" :key="character.id" :character="character" /> -->
        </div>
      </div>
      <div class="col-md-8">
        <!-- <ActiveCharacter /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { charactersService } from '../services/CharactersService'
// import Notification from '../utils/Notification'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      character: computed(() => AppState.character)
    })
    onMounted(async() => {
      try {
        await charactersService.getCharacters()
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
</style>
