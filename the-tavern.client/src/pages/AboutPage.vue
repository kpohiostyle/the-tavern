<template>
  <div class="about container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-8 col-12 p-md-5" v-if="state.show=='basics'">
        <StartingComponent />
      </div>
      <div class="col-md-8 col-12 p-md-5" v-if="state.show=='classes'">
        <ClassesAboutComponent />
      </div>
      <div class="col-md-8 col-12 p-md-5" v-if="state.show=='races'">
        <RaceComponent />
      </div>
      <div class="col-md-8 col-12 p-md-5" v-if="state.show=='background'">
        <BackgroundComponent />
      </div>
      <div class="col-md-8 col-12 p-md-5" v-if="state.show=='equipment'">
        <EquipmentComponent />
      </div>
      <div class="col-md-8 col-12 p-md-5" v-if="state.show=='rules'">
        <RulesComponent />
      </div>
      <div class="col-md-8 col-12 p-md-5" v-if="state.show=='term'">
        <TermComponent />
      </div>
      <div class="col-md-8 col-12 p-md-5" v-if="state.show=='rec'">
        <RecComponent />
      </div>
      <div class="TavernKeeper col-4 d-md-block d-none bg-primary p-xl-5">
        <div class="shadow bg-light text-center m-3 p-5">
          <div>
            <img src="https://ibb.co/7jQxfhV" alt="Friendly Tavern Keeper">
          </div>
          <i>You must be new in town. Let me know if you have any questions!</i>
          <div class="row justify-content-center">
            <div class="col-12 text-center my-2">
              <button type="button" class="btn btn-primary w-100" title="classes" @click="toggle('classes')">
                Classes
              </button>
            </div>
            <div class="col-12 text-center mb-2">
              <button type="button" class="btn btn-primary w-100" title="DnD races" @click="toggle('races')">
                <span class="w-100">
                  Races
                </span>
              </button>
            </div>
            <div class="col-12 text-center mb-2">
              <button type="button" class="btn btn-primary w-100" title="backgrounds" @click="toggle('background')">
                Backgrounds
              </button>
            </div>
            <div class="col-12 text-center mb-2">
              <button type="button" class="btn btn-primary w-100" title="equipment" @click="toggle('equipment')">
                Equipment
              </button>
            </div>
            <div class="col-12 text-center mb-2">
              <button type="button" class="btn btn-primary w-100" title="basic rules" @click="toggle('rules')">
                Basic Rules
              </button>
            </div>
            <div class="col-12 text-center mb-2">
              <button type="button" class="btn btn-primary w-100" title="terminology and definitions" @click="toggle('term')">
                Terminology
              </button>
            </div>
            <i>Looking for something more specific? Here are some helpful resources.</i>
          </div>
          <div class="col-12 text-center my-2">
            <button type="button" class="btn btn-primary w-100" title="terminology and definitions" @click="toggle('rec')">
              Helpful Links
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'AboutPage',
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      show: 'basics'
    })

    return {
      state,
      toggle(str) {
        state.show = str
      }
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
 h2 {
   font-size: 2.5rem;
 }
 p {
   font-size: 2rem;
 }
 i {
   font-size: 1.5rem;
 }
 button {
   font-size: 1.25rem;
 }
 img{
   height: 30rem;
   width: 25;
 }
</style>
