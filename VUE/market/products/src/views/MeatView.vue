<template>
  <div class="about">
    <h1>Meat page</h1>
    <product-card v-for="product in products"  :key="product.id" :productData="product" :pType="productType"/>
  
</div>
</template>


<script>
import productCard from "../components/productCard.vue"

export default {
name: "FruitView",
components: {
  productCard,
},
data(){
  return {
    
productType: "3",
  };
},
computed:{
    products(){
     return this.$store.getters["getProduct"];
    }
  },
};


</script>
