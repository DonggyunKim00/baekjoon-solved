const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();

function solution(input) {
  const multiAllSum = input
    .split(" ")
    .map((item) => {
      return item * item;
    })
    .reduce((acc, cur) => {
      return acc + cur;
    });
  return multiAllSum % 10;
}

console.log(solution(input));
