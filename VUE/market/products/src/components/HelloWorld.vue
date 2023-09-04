<template>
   
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-divider class="mb-8"></v-divider>

    <!--ürün arama kutusu -->
    <v-container  class=" rounded-xl rounded-be-0 " >
        <v-row no-gutters  >
         <v-col offset="3" value="rounded-xl" order="first" cols="6" >
          <div class="duz-cerceve" > 
            <p class="text-h5 font-weight-bold">
                    Find Product<br>
            </p>    
            <v-sheet width="300" class="mx-auto mb-4">
              <v-form @submit.prevent>
                <v-text-field
                    height="100"
                    v-model="productDatam.productId"
                    :rules="rules"
                    label="Barcode Nummer:"      
                >
                </v-text-field>
                <v-btn color="indigo-darken-3" type="submit" block class="mt-2" @click="handleFind">Send</v-btn>
              </v-form>
            </v-sheet>
            <findetCard  :productData="products"/> 
            <br>
          </div>
       <!--update/delete butonlar -->   
          <div>
            <v-sheet width="300" class="mx-auto">
              <v-btn color="indigo-darken-3" :disabled="!isFind" type="submit" block class="mt-2" @click="update">Update</v-btn>
              <v-btn color="indigo-darken-3" :disabled="!isFind" type="submit" block class="mt-2" @click="deleted">Delete</v-btn>
              <v-alert
                type="info"
                title=""
                text="Successfully Deleted"
                variant="tonal"
                v-if="isDelete"
              ></v-alert>  
            </v-sheet>
          </div>
        </v-col>
        </v-row>
    <br>
    <br>
    <v-row class=" mb-6 " no-gutters>
      <v-col cols="4">
         <!--ürün güncelleme için form --> 
        <div>
        <p v-if="isActive" class="text-h4 font-weight-bold">
            Update Product<br>
        </p>
      
        <v-sheet  width="300" class="mx-auto " >
          <v-form :disabled="!isActive" @submit.prevent>    
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
          <v-btn color="indigo-darken-3" :disabled="!isActive" type="submit" block class="mt-2" @click="send">Submit</v-btn>
          </v-form>
        </v-sheet>
      </div>
      </v-col>
       <!--uyarı ve bilgi kutuları -->   
      <v-col align-self="end" v-if="isActive" cols="4" offset="4">
        <v-alert
          variant="outlined"
          type="warning"
          prominent
          border="top"
          v-if="isActive"      
        >
          Pay attention to the following rules when updating the product
        </v-alert>
        <v-divider class="mb-1"></v-divider>
        <v-alert
          type="info"
          title=""
          text="- Write the decimal parts of the prices with a dot (ex: 2.4) "
          variant="tonal"
          v-if="isActive" >
        </v-alert>
        <v-alert
          type="info"
          title=""
          text="- Type =>
              "
          variant="tonal"
          v-if="isActive"
        ></v-alert>
        <v-alert
          type="info"
          title=""
          text="1: Drink"
          variant="tonal"
          v-if="isActive"
        ></v-alert>
        <v-alert
          type="info"
          title=""
          text="2: Fruit "
          variant="tonal"
          v-if="isActive"
        ></v-alert>
        <v-alert
          type="info"
          title=""
          text="3: Meat "
          variant="tonal"
          v-if="isActive"
        ></v-alert>
        <v-alert
          type="info"
          title=""
          text="4: Milk"
          variant="tonal"
          v-if="isActive"
        ></v-alert>
        <v-alert
          type="info"
          title=""
          text="5: Others"
          variant="tonal"
          v-if="isActive"
        ></v-alert>
      </v-col>
    </v-row> 
  </v-container>
</div> 
</template>

<script>
import findetCard from "./findetCard.vue"
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
       isActive:false,
       isDelete:false,
       isFind:false,
       isUpdate:true,
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
handleFind(){
  this.$store.dispatch("fetchProduct", this.productDatam.productId);
  this.isFind=true;
},
update(){
  this.isActive=true; 
  
},
deleted(){
  this.$store.dispatch("deleteProduct", this.productDatam.productId);
  this.isDelete=true;
  this.isFind=false;
},
send(){  
  this.$store.dispatch("updateProduct", this.productDatam);
  
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
h1{
  color:#42b983; 
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
.duz-cerceve{
	border:3px solid rgb(112, 110, 110);
  margin: auto;
	width:380px;
	height:400px;
  
}
</style>
