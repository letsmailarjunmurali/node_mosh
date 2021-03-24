const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});
const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Angular",
    author: "Mosh",
    tags: ["node", "backend"],
    isPublished: true,
  });
  const result = await course.save();
  console.log(result);
}
createCourse();

async function getCourses() {
  const courses = await Course.find({ author: "Mosh", isPublished: true })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log("Get " + courses);
}

getCourses();
