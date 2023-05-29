const express = require("express");
const Model = require("../model/model");

const router = express.Router();
module.exports = router;

//Post Method
router.post("/", async (req, res) => {
  try {
    const newTask = await Model.create({
      ...req.body,
      createdDate: new Date(),
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/", async (req, res) => {
  try {
    const pageNumber = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.size) || 6;
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const tasks = await Model.find();
    const paginatedTasks = tasks.slice(startIndex, endIndex);
    const totalPages = Math.ceil(tasks.length / pageSize);
    res.json({
      items: paginatedTasks,
      currentPage: pageNumber,
      totalPages: totalPages,
      total: tasks.length,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
