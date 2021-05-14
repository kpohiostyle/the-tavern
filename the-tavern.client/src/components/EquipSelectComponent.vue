<template>
  <div class="col-4 my-2">
    <button type="button" class="btn btn-lg btn-light" @click="addEquipment(equipmentProp)">
      <h4 class="mb-2" v-if="equipmentProp.weapon">
        <u>Weapon</u> <br>  {{ equipmentProp.weapon[0] }} x {{ equipmentProp.weapon.length }}
      </h4>
      <h4 class="mb-2" v-if="equipmentProp.armor">
        <u>Armor</u> <br> {{ equipmentProp.armor[0] }} x {{ equipmentProp.armor.length }}
      </h4>
      <h4 class="mb-2" v-if="equipmentProp.tool">
        <u>Tool</u> <br> {{ equipmentProp.tool[0] }} x {{ equipmentProp.tool.length }}
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
      state,
      addEquipment(obj) {
        if (obj.weapon) {
          obj.weapon.forEach(w => AppState.character.equipment.weapons.push(w))
        }
        if (obj.armor) {
          obj.armor.forEach(a => AppState.character.equipment.armor.push(a))
        }
        if (obj.tool) {
          obj.tool.forEach(t => AppState.character.equipment.tools.push(t))
        }
        AppState.count.equipment++
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
