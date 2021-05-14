<template>
  <div class="home container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-8 col-12 p-md-5">
        <div class="shadow bg-light text-center m-3 p-md-5 p-4">
          <h2><u>Welcome Weary Traveller!</u></h2>
          <p>
            The Tavern is an interactive character creation experience for Dungeons and Dragons 5th Edition, designed for aspiring adventurers!
          </p>
          <p class="d-md-block d-none">
            Follow the promps to easily create your ideal character and jumpstart your adventure!
          </p>
          <div class="row justify-content-center ">
            <div class="col-3 d-md-block d-none text-right">
              <router-link :to="{name: 'About'}">
                <button type="button" class="btn btn-primary">
                  About
                </button>
              </router-link>
            </div>
            <div class="col-md-3 col-8">
              <router-link :to="{name: 'Questions'}">
                <button type="button" class="btn btn-lg btn-primary">
                  Get Started!
                </button>
              </router-link>
            </div>
            <div class="col-3 d-md-block d-none text-left">
              <!-- <router-link :to="{name: 'Results'}"> -->
              <button type="button" class="btn btn-primary">
                Random
              </button>
              <!-- </router-link> -->
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 d-md-block d-none bg-primary sidebar p-5 pt-5">
        <div class="shadow bg-light text-center m-3 p-5">
          <h2><u>Your Characters</u></h2>
          <CharacterListComponent v-for="c in state.characters" :key="c.id" :character="c" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
// import { charactersService } from '../services/CharactersService'
import { AppState } from '../AppState'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      user: computed(() => AppState.user),
      loading: true,
      results: computed(() => AppState.results),
      quiz: computed(() => AppState.quiz),
      character: computed(() => AppState.character)
    })
    onMounted(async() => {
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
