<template>
  <div class="about">
    <h1>Drink  page</h1>
   
<product-card v-for="item in products"  :key="item.id" :productData="item" :pType="productType"/>  

</div>


</template>

<script>
import productCard from "../components/productCard.vue"

export default {
name: "DrinkView",
components: {
  productCard,
},
data(){
  return {    
productType: "1",
  };
},
computed:{
    products(){
     return this.$store.getters["getProduct"];
    }
  },
}

</script>



