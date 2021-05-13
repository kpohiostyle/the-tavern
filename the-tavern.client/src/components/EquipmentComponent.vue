<template>
  <div class="row justify-content-around" v-if="equipmentProp.second">
    <div class="col-3 my-3" v-if="equipmentProp.first">
      <button type="button" class="btn btn-lg btn-outline-dark" v-if="equipmentProp.first.weapon">
        <u>Weapon</u> <br> {{ equipmentProp.first.weapon[0] }}
      </button>
      <button type="button" class="btn btn-lg btn-outline-dark" v-if="equipmentProp.first.armor">
        <u>Armor</u> <br>{{ equipmentProp.first.armor[0] }}
      </button>
      <button type="button" class="btn btn-lg btn-outline-dark" v-if="equipmentProp.first.tool">
        <u>Tool</u> <br>{{ equipmentProp.first.tool[0] }}
      </button>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'EquipmentComponent',
  props: {
    equipmentProp: {
      type: Array,
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
