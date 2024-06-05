const express = require("express");
const router = express.Router();
const todoController = require("../controller/Todo");

// Creating the new todo
router.post("/", todoController.create);
// Retrieving all the todos
router.get("/", todoController.findAll);
// Retrieving the single todo by id
router.get("/:id", todoController.findOne);
// Updating the todo by id
router.put("/:id", todoController.update);
// Deleting the todo by id
router.delete("/:id", todoController.destroy);

module.exports = router;
