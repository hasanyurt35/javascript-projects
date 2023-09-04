const mongoose =require("mongoose");

const productSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
       
    },
    sort: {
        type: String,
    },
    type: {
        type: String,
       
    },
    createdAt: {type: Date,
    default: Date.now(),
    },

});

const Products = mongoose.model('Products', productSchema)

module.exports = Products;