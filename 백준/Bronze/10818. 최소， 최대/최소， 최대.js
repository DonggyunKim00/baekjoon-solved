const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();

function solution(input) {
  const splitInput = input.split("\n");
  const numArr = splitInput[1].split(" ");
  console.log(Math.min(...numArr) + " " + Math.max(...numArr));
}

solution(input);
