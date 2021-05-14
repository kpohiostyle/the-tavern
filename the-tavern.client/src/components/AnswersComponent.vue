<template>
  <div class="col-md-6 col-12 p-md-3 p-3">
    <button type="button" class="btn btn-lg btn-dark shadow py-2 px-3" @click="select(answerProp.value, state.activeQuestion.type)">
      {{ answerProp.body }}
    </button>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { questionsService } from '../services/QuestionsService'
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
      activeQuestion: computed(() => AppState.activeQuestion)
    })
    onMounted(async() => {

    })
    return {
      state,
      async select(value, type) {
        try {
          // quizService.nextQuestion(answer, state.question.number)
          await questionsService.buildCharacter(value, type)
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
  font-size: 1.75rem;
}
</style>
