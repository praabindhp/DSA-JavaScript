const fs = require("fs");

fs.readFile("Basic-Programs/my-data.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
