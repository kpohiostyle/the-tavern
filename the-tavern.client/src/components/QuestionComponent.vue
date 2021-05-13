<template>
  <div class="shadow row justify-content-center bg-light text-center m-3 p-md-5 p-4">
    <div class="col-12">
      <h2><u>{{ state.activeQuestion.query }}</u></h2>
      <div class="row justify-content-center">
        <AnswersComponent v-for="a in state.activeQuestion.answers" :key="a.value" :answer-prop="a" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'QuestionComponent',
  setup() {
    const state = reactive({
      activeQuestion: computed(() => AppState.activeQuestion)
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

<style lang="scss" scoped>
h2 {
  font-size: 2.5rem;
}
</style>
