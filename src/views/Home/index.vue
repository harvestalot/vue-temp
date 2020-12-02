<template>
  <div>
      {{ getUsername }},欢迎来到Home
  </div>
</template>

<script>
  export default {
    name:'Home',
    computed: {
      getUsername() {
        return this.$store.state.username;
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>