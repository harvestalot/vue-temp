<template>
  <div>
    <div>头部</div>
    <router-link to="/home">首页</router-link>
    <router-link to="/list">列表</router-link>
    <router-view />
    <div>底部</div>
  </div>
</template>

<script>
  export default {
    name:'Home'
  }
</script>

<style lang="scss" scoped>

</style>