const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/amazon")
  .then(() => console.log("mongoose connected..."))
  .catch((err) => console.log("mongoose didn't connect", err));

const amazonShema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number },
  image: { type: String },
});

const Amazon = mongoose.model("AmazonData", amazonShema);
module.exports = Amazon;
