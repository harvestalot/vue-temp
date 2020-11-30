module.exports = {
  outputDir: process.env.VUE_APP_OUTPUT_DIR,
  css: {
    loaderOptions: {
      sass: {
        // additionalData: '@import "@/assets/scss/var.scss";',
      },
    },
  },
  productionSourceMap: false,
  devServer: {
    host: process.env.VUE_APP_HOST,
    port: process.env.VUE_APP_PORT,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_PROXY,
        changeOrigin: true,
      },
    },
    disableHostCheck: true,
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '智能供应链决策引擎';
      return args;
    });
  },
};
