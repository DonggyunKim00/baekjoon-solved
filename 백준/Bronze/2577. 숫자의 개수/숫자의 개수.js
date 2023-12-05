const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();

function solution(input) {
  const numArr = input.split("\n").map((item) => {
    return parseInt(item);
  });
  const allMultiSplit = numArr
    .reduce((acc, cur) => {
      return acc * cur;
    })
    .toString()
    .split("");
  const countObj = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };

  allMultiSplit.forEach((element) => {
    countObj[element] += 1;
  });

  return Object.values(countObj).forEach((value) => {
    console.log(value);
  });
}

solution(input);
