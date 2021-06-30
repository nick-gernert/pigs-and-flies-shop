import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import filters from './plugins/filters';
import './assets/tailwind.css';
import './styles.css';

Vue.config.productionTip = false;

Vue.use(filters);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
