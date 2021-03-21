const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");

const express = require("express");
const morgan = require("morgan");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  startupDebugger("Morgan enabled");
}

app.get("/", (req, res) => {
  res.render("index", { title: "First app", message: "Welcome" });
});

dbDebugger("Connected to the database");
const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Listening on port ${port}`));
