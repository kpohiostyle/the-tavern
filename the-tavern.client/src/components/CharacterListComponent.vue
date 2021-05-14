<template>
  <!-- TODO get the toggle to dissappear on anything larger than a medium -->
  <div class="row justify-content-center px-md-3">
    <div class="col-12 shadow mb-2 py-2 bg-light" @click="setActiveCharacter(character.id) ">
      <h5>
        <u>{{ character.job }}</u>
      </h5>
      <p>{{ character.race }}</p>
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
h5{
  font-size: 2rem;
}
p{
  font-size: 1.25rem;
}
</style>
