import Vue from 'vue';
import App from './infrastructure/ui/vuejs/App.vue';
import store from '@/infrastructure/ui/vuejs/store';

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
