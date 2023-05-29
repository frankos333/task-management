const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  status: {
    required: true,
    type: String,
  },
  description: {
    required: false,
    type: String,
  },
  assignee: {
    required: true,
    type: String,
  },
  createdDate: {
    required: true,
    type: Date,
  },
  linkedTasks: {
    required: true,
    type: [],
  },
});

module.exports = mongoose.model("Todo", todoSchema);
