// Synchronous
console.log("Before");

// Asynchronous
setTimeout(() => {
  console.log("Reading from database");
}, 2000);

// Synchronous
console.log("After");
