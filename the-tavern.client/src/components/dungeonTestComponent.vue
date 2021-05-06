<template>
  <div class="dungeonTestComponent row justify-content-center" v-if="state.rawData">
    {{ state.rawData }}
    <div class="col-12"></div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
// import { dungeonTestService } from '../services/DungeonTestService'
// import Notification from '../utils/Notification'

export default {
  name: 'DungeonTestComponent',
  setup() {
    const state = reactive({
      loading: true,
      character: computed(() => AppState.character),
      rawData: computed(() => AppState.rawData)
    })
    onMounted(async() => {
      // try {
      //   await dungeonTestService.getCharacter(state.character)
      // } catch (error) {
      //   Notification.toast('Error: ' + error, 'error')
      // }
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
