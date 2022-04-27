<template>
  <div >
      <h1>{{id}}</h1>
      <h1>{{name}}</h1>
      <h2>{{weather}}</h2>
      <h2>{{temperature}}</h2>
      <h2>{{updatedAt.toLocaleString("fr-FR")}}</h2>
  </div>
</template>

<script>

export default {
  name: 'testCity',
   data: function(){
     return {
    //  name: 'Strasbourg', // nom de la ville
    // weather: 'Peu nuageux', // descriptif météo 
    // temperature: 20.55, // température en °C
    // updatedAt: new Date() // date de dernière mise à jour
   }
     },
     props:{
       id : Number,
       name : String,
       weather : String,
       temperature : Number,
       updatedAt : Date
     }
}

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
