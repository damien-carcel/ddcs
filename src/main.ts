import Vue from 'vue';
import App from './Infrastructure/UI/Vue/App.vue';
import store from '@/Infrastructure/UI/Vue/store';

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
