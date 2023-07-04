const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

const InputRouter = require("./routes/input");
const { calculateConnections } = require("./middlewares/calculateConnections");

const app = express();

app.use(cors());
app.use(express.json());

app.use(morgan("dev"));

// middleware for counting the number of connections made by frontend
app.use(calculateConnections);

app.use("/api/input", InputRouter);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server created on port " + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
