import Vue from 'vue';
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import './theme/index.css'
import App from './App.vue'


Vue.use(ElementUI, { size: 'medium' });


Vue.config.productionTip = false;
 
new Vue({
  el:'#app',
  router,
  store,
  render: (h) => h(App),
});
// .$mount('#app');
