const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/mongo-exercises");

const courseSchema = new mongoose.Schema({
  tags: [String],
  name: String,
  author: String,
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

async function getCourses() {
  return await Course.find({
    isPublished: true,
    tags: { $in: ["frontend", "backend"] },
  })
    .sort("-price")
    .select("name author price");
}

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();
