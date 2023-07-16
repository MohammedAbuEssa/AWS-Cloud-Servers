"use strict";
require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({
    "Team members": {
      Malaek: "Malek",
      Helmi: "Helmi",
      "Mohammad Gaith": "Mohammad Gaith",
      AbuEssa: "AbuEssa",
    },
  });
});

app.get("/welcome", (req, res) => {
  res.send("Welcome to our API");
});

app.get("/json", (req, res) => {
  res.json({ Json: "Json" });
});

app.listen(PORT, () => {
  console.log(`App listen on Port ${PORT}`);
});
