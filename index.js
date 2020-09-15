const express = require("express");
const app = express();

const mongoose = require("mongoose");
// const keys = require("./config/keys");

const { json } = require("body-parser");
app.use(json());

// mongoose
//   .connect(keys.mongoURI, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .catch((err) => console.log(err));

// require("./models/data");
// const Data = mongoose.model("datas");

// app.post("/api/data", async (req, res) => {
//   console.log(req.body);
//   await new Data({
//     date: new Date().toLocaleString(),
//     ...req.body,
//   }).save();
//   res.status(201).send({});
// });

// app.get("/api/data", async (req, res) => {
//   const data = await Data.find();
//   res.status(200).send(data);
// });

// app.delete("/api/data/:id", async (req, res) => {
//   await Data.findByIdAndDelete(req.params.id);
//   res.send({});
// });

if (["production", "ci"].includes(process.env.NODE_ENV)) {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Listen to 4000"));
