//creating promises
const p = Promise.resolve({ id: 1 });
p.then((result) => console.log(result));

// const p1 = Promise.reject(new Error("Something went wromg"));
// p1.then((result) => console.log(p1));

// Runnig promises parallely.if both opeartion success it will execute  Promise.all

const p3 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 1");
    resolve(1);
  }, 2000);
});

const p4 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 2");
    resolve(2);
  }, 2000);
});

Promise.all([p3, p4])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
