<template>
  <div class="row d-flex flex-direction text-center justify-content-center pr-5 mr-5">
    <div class="statBox col-2">
      <div class="row">
        <div class="col-12 topText">
          <p>str</p>
        </div>
        <div class="bottomText col-12">
          <p>25</p>
        </div>
      </div>
    </div>
    <div class="statBox col-2">
      <div class="row">
        <div class="col-12 topText">
          <p>wis</p>
        </div>
        <div class="bottomText col-12">
          <p>15</p>
        </div>
      </div>
    </div>
    <div class="statBox col-2">
      <div class="row">
        <div class="col-12 topText">
          <p>dex</p>
        </div>
        <div class="bottomText col-12">
          <p>17</p>
        </div>
      </div>
    </div>
    <div class="statBox col-2">
      <div class="row">
        <div class="col-12 topText">
          <p>con</p>
        </div>
        <div class="bottomText col-12">
          <p>20</p>
        </div>
      </div>
    </div>
    <div class="statBox col-2">
      <div class="row">
        <div class="col-12 topText">
          <p>cha</p>
        </div>
        <div class="bottomText col-12">
          <p>5</p>
        </div>
      </div>
    </div>
    <div class="statBox col-2">
      <div class="row">
        <div class="col-12 topText">
          <p>int</p>
        </div>
        <div class="bottomText col-12">
          <p>30</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StatsComponent'
}
</script>

<style scoped>
.statBox{
 border: 1px solid black;
 font-size: 1rem;
}
.topText p{
  border-bottom: 1px solid black;
  padding: 0;
  font-size: 1.30rem;
}
.bottomText p{
  font-size: 1.75rem;
}
</style>
