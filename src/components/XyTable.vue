<template>
  <div class="TablePage">
    <el-table
      v-loading="$attrs.loading"
      :data="tableData"
      @selection-change="handleSelectionChange"
    >
      <template v-for="(thItem, index) in tableColumn">
        <template v-if="thItem.handleBtn">
          <el-table-column
            :key="index"
            v-bind="thItem"
          >
            <template slot-scope="scope">
              <!-- 通用操作 -->
              <span
                v-for="(o, key) in thItem.handleBtn"
                :key="key"
              >
                <template v-if="o.statuses">
                  <template v-if="thItem.assistantProp && o.assistantStatuses">
                    <el-button
                      v-if="o.assistantStatuses.indexOf(scope.row[thItem.prop]) > -1 && o.statuses.indexOf(scope.row[thItem.assistantProp]) > -1"
                      :type="o.type"
                      style="margin-right: 10px"
                      @click="o.clickFun(scope.$index, scope.row)"
                    >{{ o.label }}</el-button>
                  </template>
                  <template v-else>
                    <el-button
                      v-if="o.statuses.indexOf(scope.row[thItem.prop]) > -1"
                      :type="o.type"
                      style="margin-right: 10px"
                      @click="o.clickFun(scope.$index, scope.row)"
                    >{{ o.label }}</el-button>
                  </template>
                </template>
                <template v-else>
                  <el-button
                    :type="o.type"
                    style="margin-right: 10px"
                    @click="o.clickFun(scope.$index, scope.row)"
                  >{{ o.label }}</el-button>
                </template>
              </span>
            </template>
          </el-table-column>
        </template>
        <template v-else-if="thItem.enum">
          <el-table-column
            :key="index"
            v-bind="thItem"
          >
            <template slot-scope="scope">
              <span>
                {{ scope.row[thItem.prop] !==null ? getEnumName(thItem.enum, scope.row[thItem.prop]) : '' }}
              </span>
            </template>
          </el-table-column>
        </template>
        <template v-else>
          <el-table-column
            :key="index"
            show-overflow-tooltip
            v-bind="thItem"
          />
        </template>
      </template>
    </el-table>
    <div
      v-if="total"
      class="TablePage-pagination"
    >
      <el-pagination
        :current-page="currentPage"
        :page-size="pageSize"
        :page-sizes="pageSizes"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import $data from './data';

export default {
  name: 'TablePage',
  props: {
    tableColumn: {
      type: Array,
      default: () => [],
    },
    tableOperates: {
      type: Array,
      default: () => [],
    },
    tableData: {
      type: Array,
      default: () => [],
    },
    total: {
      type: Number,
      default: () => 0,
    },
  },
  data() {
    return {
      pageSizes: [10, 20, 30, 40],
      pageSize: 10,
      currentPage: 1,
    };
  },
  computed: {
    getEnumName() {
      return (key, value) => $data[key].find((item) => item.value === value).label;
    },
  },
  methods: {
    handleSelectionChange(vals) {
      this.$emit('handle-selection-change', vals);
    },
    handleSizeChange(limit) {
      this.pageSize = limit;
      this.$emit('handle-pagination-change', { pageSize: this.pageSize, pageNum: 1 });
    },
    handleCurrentChange(page) {
      this.currentPage = page;
      this.$emit('handle-pagination-change', {
        pageSize: this.pageSize,
        pageNum: this.currentPage,
      });
    },
  },
};
</script>

<style lang="scss">
.TablePage {
  .el-table{
    border: 1px solid $dividers;
    border-bottom: none;
  }
  .el-table .el-table__header th,
  .el-table .el-table__header tr {
    background-color: $background-2;
  }
  &-pagination {
    padding: 15px 0;
    text-align: right;
  }
}
</style>
