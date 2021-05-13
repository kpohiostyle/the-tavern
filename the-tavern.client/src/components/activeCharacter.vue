<template>
  <div class="row my-5">
    <div class="col-md-4  text-center">
      <img src="//placehold.it/250x250" alt="">
    </div>
    <div class="col-md-6 shadow">
      <h5><u>Name: {{ state.character.name }}</u></h5>
      <p>Job: {{ state.character.job }}</p>
      <p>Race: {{ state.character.race }}</p>
      <p>Speed: {{ state.character.speed }}</p>
      <p>Hit Points: {{ state.character.health }}</p>
    </div>
  </div>
  <div class="row pr-5 mr-5">
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
  <div>
    <StatsComponent />
  </div>
  <div class="row">
    <!-- <EquipmentComponent /> -->
  </div>
</template>
<script>
import { computed, reactive } from 'vue'
// import { charactersService } from '../services/CharactersService'
// import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
export default {
  name: 'ActiveCharacter',
  setup() {
    const state = reactive({
      character: computed(() => AppState.activeCharacter)
    })
    // onMounted(async() => {
    //   try {
    //     await charactersService.setActiveCharacter(route.params.id)
    //   } catch (error) {
    //     Notification.toast('Error:' + error, 'error')
    //   }
    // })
    return {
      state
    }
  }
}
</script>
<style scoped>

</style>
