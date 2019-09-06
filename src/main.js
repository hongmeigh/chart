import Vue from 'vue';
import App from './App.vue';
import Chart from './pages/Chart.vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

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
