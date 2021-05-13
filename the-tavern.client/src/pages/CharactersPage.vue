<template>
  <div class="home container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <CharacterListComponent v-for="c in state.characters" :key="c.id" :character="c" />
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
    <div class="col-2">
      <button title="Open Edit Character Form" type="button" class="btn" data-toggle="modal" data-target="#edit-character">
        <i class="fas fa-plus" aria-hidden="true">Edit Character</i>
      </button>
    </div>
    <EditModal />
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'Characters',
  setup() {
    const state = reactive({
      characters: computed(() => AppState.characters),
      activeCharacter: computed(() => AppState.activeCharacter),
      account: computed(() => AppState.account)
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
