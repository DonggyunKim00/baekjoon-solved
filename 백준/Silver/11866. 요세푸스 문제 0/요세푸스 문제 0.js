const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .trim()
  .split(" ")
  .map((item) => Number(item));

const pArr = [];
for (let i = 1; i <= input[0]; i++) {
  pArr.push(i);
}

const answerList = [];
let location = input[1] - 1;
for (let i = 0; i < input[0]; i++) {
  if (location < pArr.length) {
    const deletedNum = pArr.splice(location, 1);
    answerList.push(...deletedNum);
  } else {
    location %= pArr.length; // 배열 범위 초과 시 위치 재조정
    const deletedNum = pArr.splice(location, 1);
    answerList.push(...deletedNum);
  }
  location += input[1] - 1;
}

console.log(`<${answerList.join(", ")}>`);
