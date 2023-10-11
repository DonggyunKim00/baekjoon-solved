const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();

const answer = input == "" ? 0: input.split(" ").length;

console.log(answer);