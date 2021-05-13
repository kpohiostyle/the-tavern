<template>
  <div class="about container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-8 col-12 p-md-5">
        <div class="shadow bg-light text-center m-3 p-md-5 p-4">
          <h2><u>DnD Game Basics</u></h2>
          <h3>
            Basic rules for DnD 5e and a glossary of terms.
          </h3>
          <i class="d-md-block d-none">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non laudantium aspernatur quod, possimus culpa temporibus perferendis sed sapiente excepturi? Sapiente, nemo quae? Ex, dolores rem. Explicabo cumque provident magni? Obcaecati, dolor. Cupiditate accusamus soluta provident nobis, deserunt in neque dignissimos error assumenda, consequuntur recusandae, totam laborum. Inventore accusantium sint, reprehenderit et exercitationem dolorem tempore esse praesentium, cumque culpa saepe eaque harum ad. Dolorem perspiciatis, praesentium amet doloribus dolore officia ipsam nemo harum ipsum distinctio voluptas.</i>
          <div class="row justify-content-around">
            <div class="col-6 d-md-none d-block text-center my-2">
              <button type="button" class="btn btn-primary w-100">
                Classes
              </button>
            </div>
            <div class="col-6 d-md-none d-block text-center my-2">
              <button type="button" class="btn btn-primary w-100">
                Races
              </button>
            </div>
            <div class="col-6 d-md-none d-block text-center my-2">
              <button type="button" class="btn btn-primary w-100">
                Backgrounds
              </button>
            </div>
            <div class="col-6 d-md-none d-block text-center my-2">
              <button type="button" class="btn btn-primary w-100">
                Equipment
              </button>
            </div>
            <div class="col-6 d-md-none d-block text-center my-2">
              <button type="button" class="btn btn-primary w-100">
                Basic Rules
              </button>
            </div>
            <div class="col-6 d-md-none d-block text-center my-2">
              <button type="button" class="btn btn-primary w-100">
                Terminology
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 d-md-block d-none bg-primary p-5 pt-5">
        <div class="shadow bg-light text-center m-3 p-5">
          <div>
            <img src="../assets/img/bartender.png" alt="Friendly Tavern Keeper">
          </div>
          <i>You must be new in town. Let me know if you have any questions!</i>
          <div class="row justify-content-center">
            <div class="col-6 text-center my-2">
              <button type="button" class="btn btn-primary w-100" title="classes">
                Classes
              </button>
            </div>
            <div class="col-6 text-center my-2">
              <button type="button" class="btn btn-primary w-100" title="DnD races">
                Races
              </button>
            </div>
            <div class="col-6 text-center my-2">
              <button type="button" class="btn btn-primary w-100" title="backgrounds">
                Backgrounds
              </button>
            </div>
            <div class="col-6 text-center my-2">
              <button type="button" class="btn btn-primary w-100" title="equipment">
                Equipment
              </button>
            </div>
            <div class="col-6 text-center my-2">
              <button type="button" class="btn btn-primary w-100" title="basic rules">
                Basic Rules
              </button>
            </div>
            <div class="col-6 text-center my-2">
              <button type="button" class="btn btn-primary w-100" title="terminology and definitions">
                Terminology
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
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
