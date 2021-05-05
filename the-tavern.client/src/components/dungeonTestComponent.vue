<template>
  <div class="dungeonTestComponent row justify-content-center">
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
// import Notification from '../utils/Notification'

export default {
  name: 'DungeonTestComponent',
  setup() {
    const state = reactive({
      loading: true,
      newPost: computed(() => AppState.newPost),
      bugs: computed(() => AppState.bugs)
    })
    onMounted(async() => {
      // try {
      //   await dungeonTestService.getCharacter()
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
