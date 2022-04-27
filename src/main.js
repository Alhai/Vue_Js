import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import testCity from "./components/City.vue";
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      path: '/cities',
      component: testCity
    }
  ]
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
