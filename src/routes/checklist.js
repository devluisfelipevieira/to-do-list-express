const express = require("express");

const router = express.Router();

const Checklist = require("../models/checklist");

router.get("/", async (req, res) => {
  try {
    let checklist = await Checklist.find({}); // lista as checklist
    res.status(200).json(checklist);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  let { name } = req.body; // desestruturação do name no body

  try {
    let checklist = await Checklist.create({ name }); // cria uma checklist
    res.status(200).json(checklist);
  } catch (error) {
    res.status(422).json(error);
  }

  console.log(name);
  res.status(200).json(req.body);
});

router.get("/:id", async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id); //procurando pelo ID
    res.status(200).json(checklist);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  let { name } = req.body;
  let id = req.params.id;

  try {
    let checklist = await Checklist.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).json(checklist);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
