<template>
  <v-card
    class="mx-auto mb-4"
    max-width="344"
    variant="outlined"     
    color="#1F7087"
  >
    <v-card-item  >
      <div>
        <div   class="text-no-wrap bg-yellow"
    >
          Barcode No: {{productData._id}}
        </div>
        <div class="text-h6 mb-1">
          {{productData.brand}}
        </div>
        <div class="text-h6 mb-1">
          {{productData.sort}}
        </div>
        <div class="text-h5 font-weight-bold">Price: {{productData.price}} €</div>
      </div>
    </v-card-item>

    <v-card-actions >
      
      
        
    </v-card-actions>
  </v-card>
</template>



<script>

export default {
   name: "findetCard",
   props: {
    productData: {
      type: Object,
      required: true,
    },   
   },
   methods:{

  },

}
</script>

