<template>
  <div class="col-md-6 col-12 p-md-5 p-3" @click="select(answerProp.value)">
    <div class="bg-light shadow p-3">
      <h3>{{ answerProp.body }}</h3>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { quizService } from '../services/QuizService'
import Notification from '../utils/Notification'

export default {
  name: 'AnswersComponent',
  props: {
    answerProp: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      question: computed(() => AppState.question)
    })
    onMounted(async() => {

    })
    return {
      state,
      async select(answer) {
        try {
          if (await Notification.confirmAction()) {
            quizService.nextQuestion(state.question.number, answer)
          }
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
