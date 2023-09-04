<template>
  <div >
  <h1>Add New Product</h1>
  </div>
  <v-divider></v-divider>
     <v-container  class=" rounded-xl rounded-be-0" >
        <v-row no-gutters class=" rounded-t-xl">
         <v-col value="rounded-xl" cols="7">


         <v-sheet  width="300" class="mx-auto " >
         <v-form  @submit.prevent>    
         <v-text-field height="100"
          v-model="productDatam.brand"
          :rules="rules"
          label= "brand"        
         ></v-text-field>

        <v-text-field
         v-model="productDatam.sort"
         :rules="rules"
         label="sort"
        ></v-text-field>

        <v-text-field
          v-model="productDatam.type"
          :rules="rules"
          label="type"
        ></v-text-field>

        <v-text-field
          v-model="productDatam.price"
          :rules="rules"
          label="price"
        ></v-text-field>

        <v-btn rounded="lg"  color="indigo-darken-3"  type="submit" block class="mt-2 " @click="add">Add</v-btn>
        
        <v-alert class="mb-2" v-if="isClicked"
          type="success"
          title="The product has been successfully added."
          text=""
        ></v-alert>

      </v-form>
    </v-sheet>
  <findetCard v-if="isClicked" :productData="products"/> 
  <br>
  <br>
</v-col>

<v-col order="first" cols="5">     
  <v-alert
      variant="outlined"
      type="warning"
      prominent
      border="top"
    >
    When adding a new product, add it according to the rules below.
    </v-alert>
    <v-divider class="mb-1"></v-divider>
    <v-alert
    type="info"
    title=""
    text="- Write the decimal parts of the prices with a dot (ex: 2.4) "
    variant="tonal"
  ></v-alert>
  <v-divider></v-divider>
  <v-alert
    type="info"
    title=""
    text="- Type =>
        "
    variant="tonal"
  ></v-alert>
  <v-alert
    type="info"
    title=""
    text="1: Drink"
    variant="tonal"
  ></v-alert>
  <v-alert
    type="info"
    title=""
    text="2: Fruit "
    variant="tonal"
  ></v-alert>
  <v-alert
    type="info"
    title=""
    text="3: Meat "
    variant="tonal"
  ></v-alert>
  <v-alert
    type="info"
    title=""
    text="4: Milk"
    variant="tonal"
  ></v-alert>
  <v-alert
    type="info"
    title=""
    text="5: Others"
    variant="tonal"
  ></v-alert>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import findetCard from "../components/findetCard.vue"

export default {
  
  data(){
    return {
       productDatam :{
         productId:"",
         brand:"",
         sort:"",
         type:"",
         price:""
     },
     isClicked: false,
      
    }
  },
  components: {
    findetCard,
},
  name: 'HelloWorld',
  props: {
    msg: String
  },

  methods:{
add(){
  this.$store.dispatch("addProduct", this.productDatam);
  this.isClicked=true;
},

  
  

  },
   computed:{
    products(){
     return this.$store.getters["getProduct"];
    }
   },
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

