const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .slice(1);

console.log(input.sort((a, b) => a - b).join("\n"));
