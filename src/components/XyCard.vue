<template>
  <div class="ACard">
    <el-card class="ACard-box">
      <div class="ACard-box-header">
        <div class="ACard-box-header-left">
          <slot name="card-title" />
        </div>
        <div class="ACard-box-header-right">
          <slot name="card-header-right" />
        </div>
      </div>
      <div class="ACard-box-content">
        <slot name="card-content" />
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ACard',
};
</script>

<style lang="scss" scoped>
.ACard {
  margin: 12px 12px;
  ::v-deep .el-card.is-always-shadow,
  ::v-deep .el-card.is-hover-shadow:focus,
  ::v-deep .el-card.is-hover-shadow:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.06);
  }
  &-box {
    &-header {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      &-left {
        font-weight: 700;
      }
    }
  }
}
</style>
