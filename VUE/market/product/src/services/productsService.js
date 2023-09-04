const Products = require("../models/Products.js");

const register = async(req, res)=>{   
    const product = ({brand, price, sort, type}=req.body);
    try {
        const data = await Products.create(product);
        res.json(data);
    } catch (error) {
        res.status(400).json({message:"product could not created"})
    }
}

const find = async (req, res)=>{
    const id = req.params.id;
    try {
        const data = await Products.findOne({_id:id}).exec()
        res.status(200).json(data);
        
    } catch (error) {
        res.status(404).json({message:"product could not be found"});
    }
}

const findAll = async (req, res)=>{
    
    try {
        const data = await Products.find().exec()
        res.status(200).json(data);
        
    } catch (error) {
        res.status(404).json({message:"product could not be found"});
    }
}

const update = async (req, res)=>{
    const product = ({id, brand, price, sort, type}=req.body);
console.log("product");
console.log(product);
    try {
        const data = await Products.updateOne({_id:product.id},{$set: product}).exec()
        console.log("try data blogu: "+data);
        res.status(200).json(data);
        
    } catch (error) {
        res.status(400).json({message:"product could not be updated"});
    }
}

const remove = async (req, res)=>{
    const id = req.params.id;

    try {
        const data = await Products.deleteOne({_id: id}).exec()
        console.log("try data blogu: "+data);
        res.status(200).json(data);
        
    } catch (error) {
        res.status(400).json({message:"product could not be deleted"});
    }
}

const registerH = async(req, res)=>{   
    const product = ({brand}=req.body);
    try {
        const data = await Products.create(product);
        res.json(data);
    } catch (error) {
        res.status(400).json({message:"product could not created"})
    }
}



module.exports = {
    register,
    find,
    findAll,
    update,
    remove,
    registerH
}