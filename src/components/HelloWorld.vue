<template>
  <div >
<div v-for="city in cities" :key="city.id">
    <!-- <h1>{{ name }}</h1>
    <h2>{{ weather }}</h2>
    <p>{{ temperature }}</p>
    <p>{{ updatedAt.toLocaleString("fr-FR") }}</p> -->
    
    <Testcity :id="city.id" 
              :name="city.name"
              :weather="city.weather"
              :temperature="city.temperature"
              :updatedAt="city.updatedAt"
    />
</div>
            <!-- :name="cities[0].name"
      :weather="cities[0].weather"
      :temperature="cities[0].temperature"
      :updatedAt="cities[0].updatedAt" -->
    

    

  </div>
</template>
<script>
import Testcity from "./City.vue";
import {format} from "/node_modules/timeago.js"
export default {  
  name: "citiesList",
  components: { Testcity },
  data: function () {
    return {
      cities: [
        {
          id: 1,
          name: "Strasbourg", // nom de la ville
          weather: "Peu nuageux", // descriptif météo
          temperature: 20.55, // température en °C
          updatedAt: format(new Date()), // date de dernière mise à jour
        },

        { id: 2,
          name: "Pau", // nom de la ville
          weather: "Peu nuageux", // descriptif météo
          temperature: 10.55, // température en °C
          updatedAt: format(new Date()), // date de dernière mise à jour
        }
      ]
    }
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
