<template>
  <div>
    <div class="row my-5">
      <div class="col-md-4 text-center">
        <img src="//placehold.it/250x250" class="w-100" alt="">
      </div>
      <div class="col-md-6 shadow bg-light">
        <h5>Name: <span class="editName" @click.stop="" spellcheck="false" contenteditable="true" @blur="editName"> {{ state.character.name || 'Add Name' }}</span></h5>
        <p>Job: {{ state.character.job }}</p>
        <p>Race: {{ state.character.race }}</p>
        <p>Speed: {{ state.character.speed }}</p>
        <p>Hit Points: {{ state.character.health }}</p>
      </div>
    </div>
    <div class="row pr-md-5 mr-md-5 px-2">
      <div class="about col-12">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut labore corporis velit
          id aliquid debitis excepturi odio earum. Reprehenderit excepturi quibusdam laborum
          amet, vero numquam molestias dignissimos porro nulla? Consequuntur.
          Expedita similique aut repellat, esse distinctio magnam non recusandae, error,
          laudantium ut iure quis accusantium aspernatur quam mollitia accusamus tempore.
          Sit ullam, sapiente rerum qui recusandae autem cumque ex voluptate!
        </p>
      </div>
    </div>
    <div class="row my-3">
      <StatsComponent />
    </div>
    <div class="row">
    <!-- <EquipmentComponent /> -->
    </div>
  </div>
</template>
<script>
import { computed, reactive } from 'vue'
// import { charactersService } from '../services/CharactersService'
// import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { charactersService } from '../services/CharactersService'
import Notification from '../utils/Notification'
export default {
  name: 'ActiveCharacter',
  setup() {
    const state = reactive({
      character: computed(() => AppState.activeCharacter),
      showActive: false
    })
    return {
      state,
      async editName(event) {
        try {
          state.character.name = event.target.innerText
          await charactersService.editName(state.character)
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  }
}
</script>
<style scoped>
.editName{
  min-width: 2rem;
}
.editName:hover{
  border: 1px dashed var(--primary);
}
img{
  max-width: 40vh;
}
</style>
