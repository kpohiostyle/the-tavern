<template>
  <div class="dungeonTestComponent row justify-content-center" v-if="state.rawData && !state.loading">
    <!-- {{ state.rawData }} -->

    <div class="row justify-content-center">
      <h1>Jobs</h1>
      <div class="col-12">
        <h2>
          {{ state.rawData[0].name }}
        </h2>
        <h3>Proficiencies</h3>
        <ul>
          <li>{{ state.rawData[0].proficiencies[0].name }}</li>
          <!-- <li>{{ state.rawData[0].proficiencies[1].name }}</li>
          <li>{{ state.rawData[0].proficiencies[2].name }}</li> -->
        </ul>
        <h3>Skills: Choose 2</h3>
        <ul>
          <li>{{ state.rawData[0]["proficiency_choices"] }}</li>
          <!-- <li>{{ state.rawData[0]["proficiency_choices"][0].from[1].name }}</li>
          <li>{{ state.rawData[0]["proficiency_choices"][0].from[2].name }}</li>
          <li>{{ state.rawData[0]["proficiency_choices"][0].from[3].name }}</li>
          <li>{{ state.rawData[0]["proficiency_choices"][0].from[4].name }}</li>
          <li>{{ state.rawData[0]["proficiency_choices"][0].from[5].name }}</li> -->
        </ul>
        <h3>Equipment</h3>
        <ul>
          <li>Starting Equipment: {{ state.rawData[0]["starting_equipment"] }}</li>
        </ul>
        <!-- <h6>Choose one from each pair</h6>
        <ul>
          <li>{{ state.rawData[0]["starting_equipment_options"][0].from[0][0].equipment.name }}</li>
          <li>{{ state.rawData[0]["starting_equipment_options"][0].from[0][1]["equipment_option"].from["equipment_category"].name }}</li>
          --
          <li>{{ state.rawData[0]["starting_equipment_options"][1].from[0].equipment.name }}</li>
          <li>{{ state.rawData[0]["starting_equipment_options"][1].from[1]["equipment_option"].from["equipment_category"].name }}</li>
          --
          <li>{{ state.rawData[0]["starting_equipment_options"][2].from[0].equipment.name }}</li>
          <li>{{ state.rawData[0]["starting_equipment_options"][2].from[1].equipment.name }}</li>
          --
          <li>{{ state.rawData[0]["starting_equipment_options"][3].from[0]["equipment_category"].name }}</li>
        </ul> -->
        <h4>Subclasses</h4>
        <ul>
          <li>{{ state.rawData[0].subclasses }}</li>
        </ul>
      </div>
    </div>
    <div class="row justify-content-center">
      <h1>Races</h1>
      <div class="col-12">
        <h2>
          {{ state.rawData[1].name }}
        </h2>
        <h3>Proficiencies</h3>
        <ul>
          <li>{{ state.rawData[1]["ability_bonuses"][0] }}</li>
          <!-- <li>{{ state.rawData[1]["ability_bonuses"][0].bonus }}</li> -->
          <li>Age: {{ state.rawData[1].age }}</li>
        </ul>
        <h3>Languages</h3>
        <ul>
          <li>{{ state.rawData[1].languages }}</li>
          <!-- <li>{{ state.rawData[1].languages[1].name }}</li> -->
        </ul>
        <h3>Sub-Races</h3>
        <ul>
          <li>
            {{ state.rawData[1].subraces }}
          </li>
        </ul>
        <h3>Traits</h3>
        <ul>
          <li>
            {{ state.rawData[1].traits }}
          </li>
          <!-- {{ state.rawData[1].traits[1].name }}
          </li><li>
            {{ state.rawData[1].traits[2].name }}
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { dungeonTestService } from '../services/DungeonTestService'
import Notification from '../utils/Notification'

export default {
  name: 'DungeonTestComponent',
  setup() {
    const state = reactive({
      loading: true,
      character: computed(() => AppState.character),
      rawData: computed(() => AppState.rawData)
    })
    onMounted(async() => {
      try {
        await dungeonTestService.getCharacter(state.character)
        state.loading = false
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
