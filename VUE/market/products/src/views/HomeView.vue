<template> 
 <div class="home">
    <img alt="Vue logo" src="../assets/logo4.png" width="200" height="200">
    <HelloWorld msg="DISPLAYING PRODUCTS"/>
    <v-divider></v-divider>
    <br>
    <br>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  created(){
  this.$store.dispatch("index/fetchAllProduct")
}
}
</script>
