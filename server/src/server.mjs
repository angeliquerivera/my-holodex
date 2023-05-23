import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";

const PORT = process.env.PORT || 5050;
const express = require("express");
const mongoose = require("mongoose");

const idolRouter = require("./routes/idolRouter");
const idols = require("./__test__/test_idols");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/record", records);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

mongoose.connect(
  "mongodb://localhost/holodex",
  () => {
    console.log("Connected to HoloDex DB");
  },
  (err) => {
    console.error("holodex DB error:");
    console.error(err);
  }
);
