const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();

function solution(input) {
  const inputSplit = input.split("\n");
  const reaminList = [];
  inputSplit.forEach((element) => {
    reaminList.push(element % 42);
  });
  console.log(new Set(reaminList).size);
}

solution(input);
