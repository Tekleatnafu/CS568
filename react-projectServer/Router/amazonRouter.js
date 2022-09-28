const express = require("express");
//const router = express.Router();

//const app = require("../Router/amazonRouter").router;

const app = express();
const cors = require("cors");
const Amazon = require("../model/amazonModel");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// const corsObtion = {
// origin: ["http:localhost//3000"],
// };
// app.use(cors(corsObtion));
app.use(cors());

app.get("/amazon", async (req, res) => {
  const amazon = await Amazon.find();
  res.send(amazon);
});
app.post("/addtocart", async (req, res) => {
  const result = new Amazon({
    id: req.body.id,
    title: req.body.title,
    price: req.body.price,
    rating: req.body.rating,
    image: req.body.image,
  });
  await result.save();
  res.send(result);
});
app.listen(3005, () => {
  console.log(`listen http//localhost:${3005}  running...`);
});
