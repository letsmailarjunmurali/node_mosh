const promises = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1); // pending=>resolved,fulfilled
    //reject(new Error("Something went wrong"));
  }, 2000);
});

promises
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));

// console.log("Before");
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     });
//   });
// });
// console.log("After");

// consuming promisses
// getUser(1)
//   .then((user) => getRepositories(user.gitHubUsername))
//   .then((repos) => getCommits(repos[0]))
//   .then((commits) => console.log(commits))
//   .catch((err) => console.log(err));

async function displayCommits() {
  try {
    const user = await getUser(1);
    const repo = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repo[0]);
    console.log(commits);
  } catch (err) {
    console.log(err);
  }
}

displayCommits();

function getUser(id) {
  return new Promise((resolve, reject) => {
    // async operation
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUsername: "mosh" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["commit"]);
    }, 2000);
  });
}
