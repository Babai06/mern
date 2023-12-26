const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());

const userRoute = require("./routes/userRoute");
//app.use(require("./routes/userRoute"))
app.use(express.json());
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("connected successfully");

    app.listen(process.env.PORT || 8000, (err) => {
      if (err) console.log(err);
      console.log("running successfully at", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });

  app.use(userRoute);
