const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

dotenv.config({ path: "../.env" });
require("dotenv").config();
require("./database/db");

const user = require("./routers/user");

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api", user);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});
