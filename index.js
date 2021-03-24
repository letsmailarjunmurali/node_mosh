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

// Compararison operator
// eq(equal)
// ne (not equal)
// gt (greater than)
// gte (greater than or equal to)
// lt (less than)
// lte (less than or equal to)
// in
// nin (not in)

async function getCourses() {
  const courses = await Course
    //.find({ author: "Mosh", isPublished: true })
    .find({ price: { $gt: 10, $lte: 20 } })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log("Get " + courses);
}

getCourses();

// Logical query operator
// or
// and
async function getCourses1() {
  const courses = await Course.find()
    .or([{ author: "Mosh" }, { isPublished: true }])
    .and([{ author: "Mosh", isPublished: true }])
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log("Get " + courses);
}

// Regular expression

async function getCourses2() {
  const courses = await Course.find()
    // Starts with mosh
    .find({ author: /^Mosh/ })
    //Ends with mosh
    .find({ author: /Hamedani$/i })
    // Contains with mosh
    .find({ author: /.*Mosh.*/i })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log("Get " + courses);
}

// Pagination
// /api/courses?pageNumber=2&pageSize=10
async function getCourses3 {
  const pageNumber = 2;
  const pageSize = 10;

  const courses = await Course.find()
    .find({ author: "Mosh", isPublished: true })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log("Get " + courses);
}

