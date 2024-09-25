const express = require("express");
const moongose = require("mongoose");

moongose
  .connect(
    "mongodb+srv://subburam12970:M%40rees29@cluster0.gg8vv.mongodb.net/sports-shop"
  )
  .then(() => console.log("Mongo DB Connected"))
  .catch((err) => console.log(err));


  const app = express()
  const PORT = 6000

  app.listen(PORT, ()=> console.log('server runnung'))