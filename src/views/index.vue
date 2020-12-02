<template>
  <div>
    <router-view name='mainheader'/>
    <el-container>
      <el-header>
        
        <router-link to="/home">首页</router-link>
        <router-link to="/list">列表</router-link>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
    <router-view name="mainfooter"/>
  </div>
</template>

<script>
  export default {
    name:'Home',
    data() {
      return {
        info: '加载'
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>