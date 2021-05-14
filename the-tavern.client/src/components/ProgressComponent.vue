<template>
  <div>
    <div v-if="state.role">
      <h3 class="mb-0 text-left">
        {{ attributeProp }}
      </h3>
      <div class="progress mb-3" style="height: 1.5rem">
        <div :class="'progress-bar ' + state.colors[attributeProp]"
             role="progressbar"
             :style="`width: ${state.role * 33}%`"
             :aria-valuenow="`${state.role * 33}`"
             aria-valuemin="0"
             aria-valuemax="100"
        ></div>
      </div>
    </div>

    <div v-else>
      <h3 class="mb-0 text-left">
        {{ attributeProp }}
      </h3>
      <div class="progress mb-3" style="height: 1.5rem">
        <div :class="'progress-bar ' + state.colors[attributeProp]"
             role="progressbar"
             :style="`width: ${state.style * 33}%`"
             :aria-valuenow="`${state.style * 33}`"
             aria-valuemin="0"
             aria-valuemax="100"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
// import { questionsService } from '../services/QuestionsService'
// import Notification from '../utils/Notification'

export default {
  name: 'ProgressComponent',
  props: {
    attributeProp: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      loading: true,
      activeQuestion: computed(() => AppState.activeQuestion),
      role: computed(() => AppState.attributes.role[props.attributeProp]),
      style: computed(() => AppState.attributes.style[props.attributeProp]),
      count: computed(() => AppState.count),
      colors: {
        tank: 'bg-danger',
        damage: 'bg-warning',
        support: 'bg-success',
        utility: 'bg-info',
        weapons: 'bg-danger',
        spells: 'bg-primary',
        balance: 'bg-success'

      }
    })
    onMounted(async() => {
      // try {
      //   console.log(AppState.attributes.role[props.attributeProp])
      //   questionsService.resetAttributes()
      //   await questionsService.getQuestions()
      //   state.loading = false
      // } catch (error) {
      //   Notification.toast('Error: ' + error, 'error')
      // }
    })
    return {
      state
    }
  }
}
</script>

<style>

</style>
