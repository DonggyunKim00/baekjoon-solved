const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .split("\n")
  .map((item) => item.split(" "));

const maxNum = Math.max(...input[1]);

const answer = [];
for (let i = 0; i < input[0]; i += 1) {
  answer.push((input[1][i] / maxNum) * 100);
}

console.log(answer.reduce((acc, cur) => acc + cur) / answer.length);
