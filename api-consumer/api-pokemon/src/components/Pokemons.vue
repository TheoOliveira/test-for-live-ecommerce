<template>
  <div class="container">
    <h1>Pokedex</h1>

    <div class="card-list">
      <b-card class="card-poke" v-for="(pokemon, index) in api.pokemonArr" v-bind:key="index">
        <img :src="imageUrl+index+'.png'" v-bind:key="index"/>
        <b-card-text><span>Name:</span> {{ pokemon.name }}</b-card-text>
        <b-card-text><span>Order:</span>{{pokemon.order}}</b-card-text>
        <b-card-text><span>Type:</span>{{pokemon.types[0].type.name}}</b-card-text>
          </b-card>   

    </div>
   

    <button class="btn btn-primary" v-if="this.api.previous" @click="previous">
      Previous
    </button>
    <button class="btn btn-primary" v-if="this.api.next" @click="next">Next</button>
  </div>
</template>

<script>
import axios from "axios";
let pokemonIds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,
  25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
  52,53,54,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,
  79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,
  104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,
  124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,
  144,145,146,147,148,149,150,151];
export default {
  data() {
    return {
      api: {pokemonArr: []},
        
      
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.api.pokemonArr = [];
      pokemonIds.forEach((pokemonId) => {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

        axios.get(url).then(( data ) => {
          
        console.log(data.data.types[0].type.name);
          this.api.pokemonArr.push(data.data);
          });
      });
    },
    
    next() {
      this.fetchData(this.api.next);
    },
    previous() {
      this.fecthData(this.api.previous);
    },
  },
};
</script>
<style lang="scss">
*{
  background-color:#f7f7f7f7;
}
ul {
  list-style-type: none;
}
.card-list{
  display:flex;
  flex-wrap: wrap;

}
.card-poke {
  margin:5px;
  border-radius:15%;
  width: 200px;
}
span{
  font-weight:800;
}

</style>
