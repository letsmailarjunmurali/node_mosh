const express = require("express");
const app = express();
const courses = require("./routes/courses");
const posts = require("./routes/posts");

app.use("/api/courses", courses);

app.use("api/posts", posts);

const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Listening on port ${port}`));
