import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import citiesList from "./components/HelloWorld.vue";
import accueilHome from './components/Accueil.vue';
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      path: '/',
      component: accueilHome
      
    },
    {
      path: '/cities',
      component: citiesList
    }
  ]
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
