<template>
  <div>
      {{ getUsername }},欢迎来到Home
      <p>{{total}}</p> 
  </div>
</template>

<script>
import { mapState, } from 'vuex'
  export default {
    name:'Home',
    computed: {
      ...mapState('order', ['total']),
      getUsername() {
        return this.$store.state.username;
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>