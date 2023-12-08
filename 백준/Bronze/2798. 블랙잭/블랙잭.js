const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .split("\n")
  .map((item) => item.split(" "));

const allCombinateArr = [];
for (let i = 0; i < input[0][0] - 2; i += 1) {
  for (let j = i + 1; j < input[0][0] - 1; j += 1) {
    for (let k = j + 1; k < input[0][0]; k += 1) {
      allCombinateArr.push([input[1][i], input[1][j], input[1][k]]);
    }
  }
}
const sumArr = allCombinateArr
  .map((numArr) => {
    return numArr
      .map((item) => Number(item))
      .reduce((acc, cur) => {
        return acc + cur;
      });
  })
  .filter((item) => item <= input[0][1])
  .sort((a, b) => a - b);

console.log(sumArr[sumArr.length - 1]);
