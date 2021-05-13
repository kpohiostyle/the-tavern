<template>
  <div class="row justify-content-around">
    <div class="col-3 my-3" v-if="choiceProp.first">
      <button type="button" class="btn btn-lg btn-outline-dark" v-if="choiceProp.first.weapon">
        <u>Weapon</u> <br> {{ choiceProp.first.weapon[0] }}
      </button>
      <button type="button" class="btn btn-lg btn-outline-dark" v-if="choiceProp.first.armor">
        <u>Armor</u> <br>{{ choiceProp.first.armor[0] }}
      </button>
      <button type="button" class="btn btn-lg btn-outline-dark" v-if="choiceProp.first.tool">
        <u>Tool</u> <br>{{ choiceProp.first.tool[0] }}
      </button>
    </div>
    <div class="col-3 my-3" v-if="choiceProp.second">
      <button type="button" class="btn btn-lg btn-outline-dark" v-if="choiceProp.second.weapon">
        <u>Weapon</u> <br> {{ choiceProp.second.weapon[0] }}
      </button>
      <button type="button" class="btn btn-lg btn-outline-dark" v-if="choiceProp.second.armor">
        <u>Armor</u> <br>{{ choiceProp.second.armor[0] }}
      </button>
      <button type="button" class="btn btn-lg btn-outline-dark" v-if="choiceProp.second.tool">
        <u>Tool</u> <br>{{ choiceProp.second.tool[0] }}
      </button>
    </div>
    <div class="col-3 my-3" v-if="choiceProp.third">
      <button type="button" class="btn btn-lg btn-outline-dark" v-if="choiceProp.third.weapon">
        Weapon: {{ choiceProp.third.weapon[0] }}
      </button>
      <button type="button" class="btn btn-lg btn-outline-dark" v-if="choiceProp.third.armor">
        Armor: {{ choiceProp.third.armor[0] }}
      </button>
      <button type="button" class="btn btn-lg btn-outline-dark" v-if="choiceProp.third.tool">
        Tool: {{ choiceProp.third.tool[0] }}
      </button>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'ChoicesComponent',
  props: {
    choiceProp: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      character: computed(() => AppState.character),
      job: computed(() => AppState.job)
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
