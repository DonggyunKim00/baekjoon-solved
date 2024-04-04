const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));

const total = input.splice(0, 1)[0];
input.sort((a, b) => a - b);

const topIdx = total - Math.round(total * 0.15);
const bottomIdx = Math.round(total * 0.15);

const answer = [];
for (let i = bottomIdx; i < topIdx; i++) {
  answer.push(input[i]);
}

console.log(
  total === 0
    ? "0"
    : Math.round(
        answer.reduce((acc, cur) => acc + cur, 0) / answer.length
      ).toString()
);
