const https = require("https");

const url = "https://api.github.com/users/geeksforgeeks";

https
  .get(url, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      const user = JSON.parse(data);
      console.log(`User Name: ${user.login}`);
      console.log(`Public Repos: ${user.public_repos}`);
    });
  })
  .on("error", (err) => {
    console.error(err);
  });
