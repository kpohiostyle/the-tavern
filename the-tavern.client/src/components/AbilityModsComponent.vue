<template>
  <div class="col-md-2 col-12 text-center my-3 ">
    <button :id="modProp" type="button" class="btn btn-dark" @click="addMod(modProp)">
      <h4 class="p-0 m-0">
        {{ modProp }}
      </h4>
    </button>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'AbilityModsComponent',
  props: {
    modProp: {
      type: String,
      required: true
    }
  },
  setup() {
    const state = reactive({
      character: computed(() => AppState.character),
      job: computed(() => AppState.job)
    })
    onMounted(async() => {

    })
    return {
      state,
      addMod(str) {
        Notification.toast(`You chose ${str}!`, 'success')
        AppState.character.scores[str.toLowerCase()].mod++
        AppState.count.modChoice++
        document.getElementById(str).disabled = true
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
h3 {
  font-size: 2rem;
}
</style>
