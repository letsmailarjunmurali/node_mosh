console.log("Before");

getUser(1, (user) => {
  console.log(user);
});

console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading from database");
    callback({ id: id, githubUsername: "arjun" });
  }, 2000);
}
