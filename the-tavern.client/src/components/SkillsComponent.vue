<template>
  <div class="col-4 text-center my-3 ">
    <button :id="skillProp" type="button" class="btn btn-lg btn-dark" @click="addSkill(skillProp)">
      <h3 class="p-0 m-0">
        {{ skillProp }}
      </h3>
    </button>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'SkillsComponent',
  props: {
    skillProp: {
      type: String,
      required: true
    }
  },
  setup() {
    const state = reactive({
      character: computed(() => AppState.character),
      job: computed(() => AppState.job),
      skills: computed(() => AppState.count.skills)
    })
    onMounted(async() => {

    })
    return {
      state,
      addSkill(str) {
        AppState.character.proficiencies.skills.push(str)
        AppState.count.skills++
        document.getElementById(str).disabled = true
        console.log(state.character)
      }
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
