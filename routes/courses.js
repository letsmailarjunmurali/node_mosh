const express = require("express");
const router = express.Router();
const courses = [
  { id: 1, name: "Course1" },
  { id: 2, name: "Course2" },
  { id: 3, name: "Course3" },
];

router.get("/", (req, res) => {
  res.send(courses);
});

// 1. Route parms
//If u want to get particular id
// GET /api/customer/1
router.get("/:id", (req, res) => {
  //res.send(req.params.id);
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("The course with given ID was not found");
  res.send(course);
});

module.exports = router;
