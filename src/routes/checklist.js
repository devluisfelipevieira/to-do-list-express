const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Hello World");
  res.send();
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json(req.body);
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`ID: ${req.params.id}`);
});

module.exports = router;
