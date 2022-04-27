<template>

  <div id="app">
    
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <router-link to="/">home</router-link>
    <br>
    <router-link to="/cities">City</router-link>
    <citiesList msg="Welcome to Your Vue.js App"/>
  <router-view></router-view> 
  </div>

</template>

<script>
// import citiesList from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // citiesList
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
