// Synchronous
console.log("Before");

// Asynchronous
setTimeout(() => {
  console.log("Reading from database");
}, 2000);

// Synchronous
console.log("After");

// Achieve Asynchronous  using 1.Callback 2.Promises 3.Async/Await
