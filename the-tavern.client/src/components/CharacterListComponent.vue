<template>
  <!-- TODO get the toggle to dissappear on anything larger than a medium -->
  <div class="row justify-content-center">
    <div class="col-12">
      <button type="button" class="btn btn-lg btn-dark w-100" @click="setActiveCharacter(character.id)">
        <h3>
          <u>{{ character.name }}</u>
        </h3>
        <h4>The {{ character.race }} {{ character.job }}</h4>
        <h5 class="p-0 m-0">
          {{ character.alignment }}
        </h5>
      </button>
      <transition name="fade">
        <div class="d-md-none d-block" v-if="state.show">
          <ActiveCharacter />
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { charactersService } from '../services/CharactersService'
export default {
  name: 'CharacterListComponent',
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      show: false,
      characters: computed(() => AppState.characters),
      activeCharacter: computed(() => AppState.activeCharacter),
      AppState: computed(() => AppState)
    })

    return {
      state,
      setActiveCharacter(id) {
        try {
          charactersService.setActiveCharacter(id)
          if (!state.show) {
            state.show = true
          } else {
            state.show = false
          }
          state.AppState.showActive = true
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  },
  components: {}
}
</script>
<style scoped>
h3{
  font-size: 2rem;
}
</style>
