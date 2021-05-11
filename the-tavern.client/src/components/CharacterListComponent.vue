<template>
  <div class="shadow row justify-content-center bg-light text-center m-3 p-md-5 p-4">
    <div class="col-12 shadow my-1">
      <h5><u> Name</u></h5>
      <p>Race: Race | Class: Job</p>
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
<style lang="">

</style>
