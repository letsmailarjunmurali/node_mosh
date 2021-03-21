const express = require("express");
const app = express();

const logger = require("./Logger");
const Joi = require("joi");
const morgan = require("morgan");
const helmet = require("helmet");
const config = require("config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(helmet());
app.use(morgan("tiny"));

console.log("Appilication name" + config.get("name"));
console.log("Appilication name" + config.get("mail.host"));
console.log("Appilication name" + config.get("mail.password"));

console.log(`NODE_ENV:${process.env.NODE_ENV}`);
console.log(`app:${app.get("env")}`);

// env default is develpment. use "export NODE_DEV=production" to set variables
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("morgon enabled");
}

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
  if (!course) {
    res.status(404).send("The course with given ID was not found");
    return;
  }
  res.send(course);
});

const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Listening on port ${port}`));
