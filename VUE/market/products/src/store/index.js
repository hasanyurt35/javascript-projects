import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    product :{}    
  },
  getters: {
    getProduct(state){
      return state.product
    }
  },
  mutations: {
    setProduct(state, payload){
      state.product = payload
    }
  },
  actions: {
   async fetchProduct({commit},payload){
    try{
        const productId= payload;
        const response = await axios.get(`http://localhost:5000/products/${productId}`);
        commit("setProduct", response.data);     
    }catch(error){
      console.log("hata yakalandı ", error);
      alert("Product not found! Please try again.");
    }
  },
  async updateProduct({commit},payload){
    try{
        const productData= payload;
        console.log("productData: ");
        console.log(productData);
        const response = await axios.patch("http://localhost:5000/products", {
          id: productData.productId, 
          brand: productData.brand, 
          price: productData.price, 
          sort:  productData.sort, 
          type:  productData.type
        });
        commit("setProduct", response.data);
    }catch(error){
      console.log("hata yakalandı ", error);   
      alert("Product could not updated! Please try again.");   
    }
  },
  async fetchAllProduct({commit}){
    try{      
      const response = await axios.get("http://localhost:5000/products"); 
      commit("setProduct", response.data);     
    }catch(error){
      console.log("hata yakalandı ", error);
    }
  },
  async addProduct({commit},payload){
    try{
        const productData= payload;
        console.log("productData: ");
        console.log(productData);
        const response = await axios.post("http://localhost:5000/products/register", {
      
          brand: productData.brand, 
          price: productData.price, 
          sort:  productData.sort, 
          type:  productData.type
        });
        commit("setProduct", response.data);
    }catch(error){
      console.log("add - hata yakalandı ", error);  
      alert("Product could not added! Please try again.");     
    }
  },
  async deleteProduct({commit},payload){
    try{
        const productId= payload;
        const response = await axios.delete(`http://localhost:5000/products/${productId}`);
        commit("setProduct", response.data);     
    }catch(error){
      console.log("hata yakalandı / silinemedi ", error);
      alert("Product could not deleted! Please try again."); 
    }
  },
}, 
});
