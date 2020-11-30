<template>
  <div>
      欢迎登录
      <button @click="login">登录</button>
  </div>
</template>

<script>
  export default {
    name:'Login',
    methods: {
      login() {
        this.$router.push('/home')
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>