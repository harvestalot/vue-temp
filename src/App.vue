<template>
  <div id="app" class="mall-container">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style lang="scss">

html, body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.mall-container{
  width: 100%;
  height: 100%;
  ::v-deep .tc{
    text-align: center;
  }
}

</style>