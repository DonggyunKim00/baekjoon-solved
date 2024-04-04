const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((item) => Number(item));

const answerArr = [];

input.forEach((num) => {
  if (num === 0) {
    answerArr.pop();
  } else {
    answerArr.push(num);
  }
});

console.log(answerArr.reduce((acc, cur) => acc + cur, 0).toString());
