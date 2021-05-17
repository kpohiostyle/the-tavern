<template>
  <div class="col-2 d-md-block d-none" dropzone="zone" @dragover.prevent @drop.prevent="moveNum(state.activeNum, statProp.title, state.activeScore)">
    <div class="statBox bg-light">
      <h3><u>{{ statProp.title }}</u></h3>
      <h4 v-if="statProp.value > 0">
        {{ statProp.value + statProp.mod }}
      </h4>
      <h5 v-if="statProp.mod > 0 && statProp.value < 1 ">
        +{{ statProp.mod }}
      </h5>
    </div>
  </div>
  <div class="col-4 d-md-none d-block my-2" dropzone="zone" @dragover.prevent @drop.prevent="moveNum(state.activeNum, statProp.title, state.activeScore)">
    <div class="mobileBox bg-light pt-1">
      <h3><u>{{ statProp.title.substring(0,3).toUpperCase() }}</u></h3>
      <h2 v-if="statProp.value > 0">
        {{ statProp.value + statProp.mod }}
      </h2>
      <h5 v-if="statProp.mod > 0 && statProp.value < 1 ">
        +{{ statProp.mod }}
      </h5>
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
      type: Object,
      required: true
    }
  },
  setup() {
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
        AppState.character.scores[title.toLowerCase()].value = num
        AppState.activeScores[index] = 0
        AppState.count.score++
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
.mobileBox{
 border: 1px solid black;
 height: 5rem;
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
  font-size: 1.5rem
}
h4 {
  font-size: 4rem
}
h5 {
  font-size: 3rem
}
</style>
