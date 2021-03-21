const express = require("express");
const router = express.Router();

const courses = [
  { id: 1, name: "Course1" },
  { id: 2, name: "Course2" },
  { id: 3, name: "Course3" },
];

// GET /api/posts/2008/12
router.get("/:year/:month", (req, res) => {
  res.send(req.params);
});

// 2. Query params used for adding optional
// GET /posts/2008/12?sortBy=name
router.get("/:year/:month", (req, res) => {
  res.send(req.query);
});

module.exports = router;
