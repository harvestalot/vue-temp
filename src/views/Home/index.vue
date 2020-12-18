<template>
  <div>
      {{ username }},欢迎来到Home
      <p>{{total}}</p>
      <el-button type="primary" @click="handleAdd">修改</el-button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
  export default {
    name:'Home',
    computed: {
      ...mapState('order', ['total']),
      ...mapState('user', ['token', 'username']),
      getUsername() {
        return this.$store.state.username;
      }
    },
    mounted () {
      if(!this.token){
        this.$router.push('/login')
      }
    },
    methods: {
      ...mapMutations('order', ['change_name']),
      handleAdd(){
        this.change_name(1)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>