const express = require ('express');
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes.js");
require("dotenv").config();
const mongoose = require("mongoose")
const cors = require("cors");

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };

 

const PORT =process.env.PORT;


const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use("/products", productRoutes);
app.use(cors(corsOptions));
//db config section
const db = process.env.MongoURI;
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log("DB connected"))
.catch((err)=>console.log("hata:  "+err));

app.listen(PORT, ()=>{
    console.log(`server ${PORT} portunda çalısıyor...`);
});

