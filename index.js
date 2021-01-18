require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postRouter = require("./Routes/post");

const app = express();

const mongodbURI = `${process.env.mongoURL}`;

const mongodbOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const connectdb = async () => {
  await mongoose.connect(mongodbURI, mongodbOptions).then(
    () => {
      console.log("db connected");
    },
    (error) => {
      console.error(error);
    }
  );
};

connectdb().catch((error) => console.error(error));

app.use(express.json({ limit: "30mb" }));  //Global MiddleWare
app.use(cors());
app.use("/posts", postRouter); //Post Route

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
const port = 5000 || process.env.PORT;
app.listen(port, () => console.log("Server up and running at port 5000."));
