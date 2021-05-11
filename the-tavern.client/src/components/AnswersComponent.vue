<template>
  <div class="col-md-6 col-12 p-md-5 p-3">
    <button type="button" class="btn btn-lg btn-outline-dark shadow py-2 px-5" @click="select(answerProp.value)">
      <h3 class="p-0 m-0 my-auto">
        {{ answerProp.body }}
      </h3>
    </button>
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
            quizService.nextQuestion(answer, state.question.number)
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
button {
  height: 10rem;
  width: 100%;
}
h3 {
  font-size: 2rem;
}
</style>
