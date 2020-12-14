<template>
  <div />
</template>
<script>
export default {
  name: 'AMessageBox',
  methods: {
    openMessageBox(options) {
      const title = options.title || '警告';
      const content = options.content || '是否确认执行此操作?';
      const confirmButtonText = options.confirmButtonText || '确定';
      const cancelButtonText = options.cancelButtonText || '取消';
      const type = options.type || 'info';
      const performCallback = options.performCallback || '';
      this.$confirm(content, title, {
        confirmButtonText,
        cancelButtonText,
        type,
        beforeClose: (action, instance, done) => {
          const instancecopy = instance;
          if (action === 'confirm') {
            instancecopy.confirmButtonLoading = true;
            // instance.confirmButtonText = "执行中...";
            new Promise((resolve, reject) => {
              performCallback(resolve, reject);
            })
              .then((res) => {
                this.$message({
                  type: 'success',
                  message: res,
                });
                done();
                instancecopy.confirmButtonLoading = false;
              })
              .catch((res) => {
                this.$message({
                  type: 'error',
                  message: res,
                });
                done();
                instancecopy.confirmButtonLoading = false;
              });
          } else {
            done();
          }
        },
      }).catch(() => {
        this.$message({
          type: 'warning',
          message: '已取消该操作',
        });
      });
    },
  },
};
</script>
