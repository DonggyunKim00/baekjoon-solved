const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .split("\n")
  .map((item) => item.split(" "));

console.log(
  input[1].filter((num) => parseInt(num) < parseInt(input[0][1])).join(" ")
);
