const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();

function solution(input) {
  const numArr = input.split("\n").map((item) => {
    return parseInt(item);
  });
  const maxIndex = numArr.findIndex((item) => {
    return item === Math.max(...numArr);
  });

  console.log(Math.max(...numArr));
  console.log(maxIndex + 1);
}

solution(input);
