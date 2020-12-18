<template>
  <div>
    <router-view name="mainheader" />
    <el-container>
      <el-header>
        <el-menu
          mode="horizontal"
          router
        >
          <el-menu-item index="/home">首页</el-menu-item>
          <el-menu-item index="/list">列表</el-menu-item>
          <el-menu-item index="/user-center">用户中心</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
    <router-view name="mainfooter" />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      info: "加载",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>