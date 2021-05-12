<template>
  <!-- TODO get the toggle to dissappear on anything larger than a medium -->
  <div class=" row justify-content-center text-center p-md-5">
    <div class="col-12 shadow mb-2 py-2">
      <div @click="state.show = !state.show">
        <h5>
          <u> Pikachu</u>
        </h5>
        <p>Pokemon Rodent</p>
        <transition name="fade">
          <p v-if="state.show">
            What's new Pikachu??
          </p>
        </transition>
      </div>
    </div>
    <div class="col-12 shadow my-2 py-2">
      <h5><u> Legolas</u></h5>
      <p>Elven Archer</p>
    </div>
    <div class="col-12 shadow my-2 py-2">
      <h5><u> Logan</u></h5>
      <p>Human Himbo</p>
    </div>
  </div>
</template>
<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
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
      characters: computed(() => AppState.characters)
    })
    onMounted(async() => {

    })
    return {
      state
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
