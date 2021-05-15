<template>
  <div class="col-2 " dropzone="zone" @dragover.prevent @drop.prevent="moveNum(state.activeNum, statProp.title, state.activeScore)">
    <div class="statBox bg-light">
      <div class="row">
        <div class="col-12 topText">
          <h4>{{ statProp.title }}</h4>
        </div>
        <div class="bottomText col-12">
          <h3 v-if="statProp.value > 0">
            {{ statProp.value }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { AppState } from '../AppState'
import { computed, reactive, onMounted } from 'vue'
export default {
  name: 'StatsComponent',
  props: {
    statProp: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      abilityScore: computed(() => AppState.abilityScore),
      activeNum: computed(() => AppState.activeNum),
      activeScore: computed(() => AppState.activeScore)
    })
    onMounted(async() => {

    })
    return {
      state,

      moveNum(num, title, index) {
        AppState.characterScores[title.toLowerCase()].value = num
        AppState.activeScores[index] = 0
      }

    }
  }
}

</script>

<style scoped>
.statBox{
 border: 1px solid black;
 height: 7rem;
 font-size: 1rem;
}
.topText p{
  border-bottom: 1px solid black;
  padding: 0;
  font-size: 1.30rem;
}
.bottomText p{
  font-size: 1.75rem;
}

h3 {
  font-size: 4rem
}
</style>
