const express = require("express");
const app = require("");
const cors=require("cors")
app.use(cors())

const BodyParser=require("body-parser")
app.use(BodyParser.json())
const mongoose=require("mongoose")
const PORT = 5050;


app.get("/api",(req,res)=>{
    res.send=("welcome")
})
app.listen(5050,()=>{
    console.log("Listen")

})

mongoose.connect('mongodb+srv://Rustamrsd:30mart5C@cluster0.dsjshza.mongodb.net/')
.then(()=>console.log('Connect'));

const Products = new mongoose.Schema[
    {
        img: String,
        title: String,
        detail: String,
        price : Number,

    },
    {
        timestamps: true
    }
]
app.get("/api/product",async(req,res)=>{
    try{
        const product = await productModel.find()
        res.send(product);
    }
    
 catch (err) {
    res.send(err);
}
})
app.get ("/api/product/:id",async (req, res) => {
try{
    const {id} =req.params();
    const card=await productModel.findById();
    res.send(card);
} catch (err) {
    res.send(err);
}
})
app.delete ("/api/product/:id,",async (req,res)=>{
try{
    const {id} =req.params();
    const card=await productModel.findByIdAndDelete();
    res.send(card)

}catch (err){
    res.send(err);

}
})
app.post("/api/product", async (req, res) => {
try {
  const newProduct = new productModel(req.body);
  await newProduct.save();
  res.send(newProduct);
} catch (err) {
  res.send(err);
}
});
