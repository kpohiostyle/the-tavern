<template>
  <div class="col-4 my-3">
    <button type="button" class="btn btn-lg btn-light">
      <h4 class="mb-2" v-if="equipmentProp.weapon">
        <u>Weapon</u> <br> {{ equipmentProp.weapon[0] }}
      </h4>
      <h4 class="mb-2" v-if="equipmentProp.armor">
        <u>Armor</u> <br>{{ equipmentProp.armor[0] }}
      </h4>
      <h4 v-if="equipmentProp.tool">
        <u>Tool</u> <br>{{ equipmentProp.tool[0] }}
      </h4>
    </button>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'EquipSelectComponent',
  props: {
    equipmentProp: {
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
