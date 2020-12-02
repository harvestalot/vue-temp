<template>
  <div>
      <h1>欢迎登录</h1> 
      <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>

<script>
  export default {
    name:'Login',
    computed: {
      redirect() {
        return this.$route.query.redirect;
      },
    },
    methods: {
      login() {
        this.$store.commit('setToken', "KJKJ989899")
        this.$store.commit('setUsername', "登录成功")
        this.$router.replace(this.redirect || '/home')
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>