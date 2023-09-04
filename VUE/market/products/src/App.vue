<template>

  <nav class="bg-teal-lighten-5">
    <router-link class="text-h5" to="/">Home</router-link> |
    <router-link class="text-h5" to="/drink" @click="handleFind">Drink</router-link> |
    <router-link class="text-h5" to="/fruit" @click="handleFind">Vegetable&Fruit</router-link> |
    <router-link class="text-h5" to="/milk" @click="handleFind">Milk</router-link> |
    <router-link class="text-h5" to="/meat" @click="handleFind">Meat</router-link> |
    <router-link class="text-h5" to="/others" @click="handleFind">Others</router-link> |
    <router-link class="text-h5" to="/add">Add Product</router-link> |
    
  </nav>
  <v-divider class="mb-16"></v-divider>
  <router-view/>

</template>

<script>
export default {


methods:{
handleFind(){
  this.$store.dispatch("fetchAllProduct"); 
  }
  },
 
};


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
