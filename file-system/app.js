const fs = require("fs");
const fsPromises = require("fs").promises;

const content = fs.readFileSync("./file.txt", "utf8");
console.log(content);

(async () => {
  try {
    await fsPromises.copyFile("./file.txt", "./file-copy.txt");
    console.log("file copied");
  } catch (error) {
    console.log(error);
  }
})();
