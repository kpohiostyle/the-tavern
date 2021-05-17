<template>
  <div class="col-md-4 col-12 py-md-0 py-3">
    <img :src="state.character.imgUrl" class="img-fluid" alt="">
  </div>
  <div class="col-md-6 col-12 text-left">
    <h2><u> <span class="editName" @click.stop="" spellcheck="false" contenteditable="true" @blur="editName"> {{ state.character.name || 'Add Name' }}</span> </u></h2>
    <h3>The {{ state.character.race }} {{ state.character.job }}</h3>
    <h3>{{ state.character.alignment }}</h3>
    <h4>{{ state.character.gender }}: {{ state.character.age }} Years Old</h4>
    <h4>{{ state.character.health }} Hit Points</h4>
    <h4>{{ state.character.speed }}ft of Movement</h4>
  </div>
  <!-- <div class="row pr-md-5 mr-md-5 px-2">
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
    </div> -->
  <div class="col-12 mt-md-5">
    <h2><u>{{ state.character.name }}'s Abilities</u></h2>
    <div class="row mt-md-3">
      <StatsComponent v-for="(s, key) in state.character.scores" :key="key" :stat-prop="s" />
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
