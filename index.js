console.log("Before");

getUser(1, (user) => {
  console.log(user);
  getRepositories(user.githubUsername, getRepositories);
});

console.log("After");

function getRepositories(user) {
  getRepositories(user.githubUsername, getCommits);
}

function getCommits(repo) {
  getCommits(repo, displayCommit);
}

function displayCommit(commits) {
  console.log(commits);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading from database");
    callback({ id: id, githubUsername: "arjun" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Calling Github Api");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

function getCommits(repo, callback) {
  callback("");
}
