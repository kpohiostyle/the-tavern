<template>
  <div class="bg-dark shadow mt-4 py-1" v-if="state.equipment === indexProp">
    <h3 class="text-center text-light pt-3">
      <u> Set {{ indexProp + 1 }}</u>
    </h3>
    <div class="row justify-content-around my-2 px-1">
      <EquipSelectComponent v-for="(e, index, key) in choiceProp" :key="key" :equipment-prop="e" />
    </div>
  </div>

  <!-- <div class="col-3 my-3" v-if="choiceProp.first">
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
    </div> -->
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
    },
    indexProp: {
      type: Number,
      required: true
    }
  },
  setup() {
    const state = reactive({
      character: computed(() => AppState.character),
      job: computed(() => AppState.job),
      equipment: computed(() => AppState.count.equipment)
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
