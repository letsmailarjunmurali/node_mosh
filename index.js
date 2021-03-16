const express = require("express");
const app = express();
//by default json not supported to parse body req.
app.use(express.json());

const courses = [
  { id: 1, name: "Course1" },
  { id: 2, name: "Course2" },
  { id: 3, name: "Course3" },
];

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

// 1. Route parms
//If u want to get particular id
// GET /api/customer/1
app.get("/api/courses/:id", (req, res) => {
  //res.send(req.params.id);
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("The course with given ID was not found");
  res.send(course);
});

// GET /api/posts/2008/12
app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.params);
});

// 2. Query params used for adding optional
// GET /posts/2008/12?sortBy=name
app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.query);
});

// POST /api/courses
app.post("/api/courses", (req, res) => {
  const course = { id: courses.length + 1, name: req.body.name };
  courses.push(course);
  res.send(courses);
});

const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Listening on port ${port}`));
