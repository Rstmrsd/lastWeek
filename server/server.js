const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

// const BodyParser = require("body-parser");
app.use(express.json());
const mongoose = require("mongoose");
const PORT = 7008;

const ProductSchema = new mongoose.Schema(
  {
    img: String,
    price: Number,
    title: String,
    detail: String
    
  },
  {
    timestamps: true,
  }
);
const ProductModel = mongoose.model("Practice", ProductSchema);

app.get("/api/product", async (req, res) => {
  try {
    const product = await ProductModel.find();
    res.send(product);
  } catch (err) {
    res.send(err);
  }
});
app.get("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params();
    const card = await ProductModel.findById(id);
    res.send(card);
  } catch (err) {
    res.send(err);
  }
});
app.delete("/api/product/:id,", async (req, res) => {
  try {
    const { id } = req.params();
    const card = await ProductModel.findByIdAndDelete(id);
    res.send(card);
  } catch (err) {
    res.send(err);
  }
});
app.post("/api/product", async (req, res) => {
  try {
    const newProduct = new ProductModel(req.body);
    await newProduct.save();
    res.send(newProduct);
  } catch (err) {
    res.send(err);
  }
});
app.listen(7008, () => {
  console.log("Listen");
});

mongoose.connect("mongodb+srv://Rustamrsd:30mart5C@cluster0.dsjshza.mongodb.net/")
  .then(() => console.log("Connect"));
