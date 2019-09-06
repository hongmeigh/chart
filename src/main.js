import Vue from 'vue';
import App from './App.vue';
import Chart from './pages/Chart.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [{
  path: '/chart',
  component: Chart
}]
const router = new VueRouter({routes});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
