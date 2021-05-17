<template>
  <div class="account container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-8 d-md-block d-none p-md-5">
        <div class="row justify-content-between shadow bg-light text-center m-3 p-md-5 p-4" v-if="state.activeCharacter.name">
          <ActiveCharacter />
        </div>
        <div class="row justify-content-between shadow bg-light text-center m-3 p-md-5 p-4" v-else>
          <div class="col-12">
            <h1 class=" text-center">
              Please select a Character for more details
            </h1>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-12 bg-primary sidebar p-md-5 pt-md-5">
        <div class="shadow bg-light text-center m-md-3 mx-1 my-3 p-md-5 p-3" v-if="state.user.isAuthenticated && state.characters">
          <h2><u>Your Characters</u></h2>
          <CharacterListComponent v-for="c in state.characters" :key="c.id" :character="c" />
        </div>
      </div>
    </div>
    <!-- <div class="col-2">
      <button title="Open Edit Character Form" type="button" class="btn" data-toggle="modal" data-target="#edit-character">
        <i class="fas fa-plus" aria-hidden="true">Edit Character</i>
      </button>
    </div> -->
    <!-- <EditModal /> -->
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { charactersService } from '../services/CharactersService'

export default {
  name: 'Account',
  setup() {
    const state = reactive({
      user: computed(() => AppState.user),
      characters: computed(() => AppState.characters),
      activeCharacter: computed(() => AppState.activeCharacter),
      account: computed(() => AppState.account),
      AppState: computed(() => AppState)
    })
    onMounted(async() => {
      await charactersService.getCharacters(state.account.id)
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
