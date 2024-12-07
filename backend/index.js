const express = require("express");
const db = require("./db");
const app = express();
const cors = require("cors");
require("dotenv").config();
const router = require("./router");
const PORT = process.env.PORT || 3000;
const bodyparser = require("body-parser");
app.use(bodyparser.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/", router);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
