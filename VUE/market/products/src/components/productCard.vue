<template>
  <v-card
    class="mx-auto mb-4"
    max-width="344"
    variant="outlined"  
   
    
    v-if="productData.type===pType"
  >
    <v-card-item  >
      <div>
        <div class="text-h7 mb-1 text-decoration bg-yellow">
          Barcode No: {{productData._id}}
        </div>
        <div class="text-h6 mb-1">
          {{productData.brand}}
        </div>
        <div class="text-h6 mb-1">
          {{productData.sort}}
        </div>
        <div class="text-h5 font-weight-bold">Price: {{productData.price}} </div>
      </div>
    </v-card-item>

    
  </v-card>
</template>



<script>

export default {
   name: "productCard",
   props: {
    productData: {
      type: Object,
      required: true,
    },
    pType:{
      type: String,
      required: true
    }
   }
}
</script>

