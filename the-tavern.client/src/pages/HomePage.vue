<template>
  <div class="home container">
    <div class="row justify-content-center">
      <div class="col-12">
        <h1>Dungeons and Dragons API Test Component</h1>
      </div>
    </div>
    <DungeonTestComponent />
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
