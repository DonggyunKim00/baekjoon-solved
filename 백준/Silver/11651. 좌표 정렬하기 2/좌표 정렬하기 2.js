const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((item) => item.split(" ").map((item) => parseInt(item)))
  .sort((a, b) => {
    if (a[1] > b[1]) return 1;
    else if (a[1] === b[1]) {
      if (a[0] > b[0]) return 1;
      else return -1;
    } else return -1;
  });

console.log(input.map((item) => item.join(" ")).join("\n"));
