<template>
  <div>
      {{ getUsername }},欢迎来到Home
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
      getUsername() {
        return this.$store.state.username;
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