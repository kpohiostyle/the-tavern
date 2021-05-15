<template>
  <div class="col-3 text-center my-3 ">
    <button :id="languageProp" type="button" class="btn btn-lg btn-dark" @click="addLanguage(languageProp)">
      <h3 class="p-0 m-0">
        {{ languageProp }}
      </h3>
    </button>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'LanguagesComponent',
  props: {
    languageProp: {
      type: String,
      required: true
    }
  },
  setup() {
    const state = reactive({
      character: computed(() => AppState.character),
      job: computed(() => AppState.job),
      languages: computed(() => AppState.count.languages)
    })
    onMounted(async() => {

    })
    return {
      state,
      addLanguage(str) {
        AppState.character.languages.push(str)
        AppState.count.languages++
        document.getElementById(str).disabled = true
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
